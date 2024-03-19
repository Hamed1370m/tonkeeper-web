import { Cell, Pie, PieChart } from 'recharts';
import { TokenDistribution } from '../../../state/wallet';
import { FC, memo, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Body3, Label3 } from '../../Text';

const Container = styled.div<{ activeAddress: string | undefined }>`
    container-type: inline-size;
    padding: 1rem 0;
    display: flex;
    gap: 1rem;
    path {
        stroke: transparent !important;
        transition: opacity 0.2s ease-in-out;
        ${p => p.activeAddress && 'opacity: 0.4;'}
    }

    * {
        outline: none;
    }

    .recharts-tooltip-wrapper {
        outline: none;
    }

    > *:first-child {
        flex-shrink: 0;
    }

    path#${p => p.activeAddress} {
        opacity: 1;
    }
`;

const LegendContainer = styled.div`
    max-width: calc(100% - 160px - 2rem - 2px);
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(28px, 1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(auto, 200px);

    padding: 10px 0;

    cursor: default;

    @container (max-width: 560px) {
        grid-auto-flow: row;
    }
`;

const TokenRow = styled.div<{ opacity?: number }>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    opacity: ${p => p.opacity || 1};
    padding: 6px 16px;
    height: fit-content;

    transition: opacity 0.2s ease-in-out;
`;

const TokenCircle = styled.div<{ bg: string }>`
    flex-shrink: 0;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: ${p => p.bg};
`;

const TokenPercentValue = styled(Body3)`
    font-family: ${p => p.theme.fontMono};
    margin-left: auto;
`;

const TokenPercentSymbol = styled(Body3)`
    font-family: ${p => p.theme.fontMono};
    color: ${p => p.theme.textSecondary};
`;

export const TokensPieChart: FC<{ distribution: TokenDistribution[] }> = ({ distribution }) => {
    const [activeAddress, setActiveAddress] = useState<string | undefined>();
    const tokenName = (token: TokenDistribution) => {
        return 'type' in token.meta ? 'Others' : token.meta.symbol;
    };

    const tokenAddress = (token: TokenDistribution) => {
        return 'type' in token.meta
            ? 'others'
            : 't' + token.meta.address.replace(':', '').slice(-7);
    };

    const chartData = useMemo(() => {
        return distribution.map(d => {
            return {
                id: tokenAddress(d),
                color: d.meta.color,
                value: d.fiatBalance.toNumber()
            };
        });
    }, [distribution]);

    if (!distribution) {
        return null;
    }

    return (
        <Container activeAddress={activeAddress}>
            <Chart chartData={chartData} setActiveAddress={setActiveAddress} />
            <LegendContainer>
                {distribution.map(d => (
                    <TokenRow
                        key={tokenName(d)}
                        opacity={activeAddress && activeAddress !== tokenAddress(d) ? 0.4 : 1}
                        onMouseOver={() => setActiveAddress(tokenAddress(d))}
                        onMouseOut={() => setActiveAddress(undefined)}
                    >
                        <TokenCircle bg={d.meta.color} />
                        <Label3>{tokenName(d)}</Label3>
                        <TokenPercentValue>{d.percent}</TokenPercentValue>
                        <TokenPercentSymbol>%</TokenPercentSymbol>
                    </TokenRow>
                ))}
            </LegendContainer>
        </Container>
    );
};

const Chart: FC<{
    setActiveAddress: (address: string | undefined) => void;
    chartData: { id: string; color: string; value: number }[];
}> = memo(({ setActiveAddress, chartData }) => {
    return (
        <PieChart width={160} height={160}>
            <Pie
                data={chartData}
                innerRadius={40}
                outerRadius={80}
                paddingAngle={1}
                dataKey="value"
            >
                {chartData.map(elem => (
                    <Cell
                        key={`cell-${elem.id}`}
                        name={elem.id}
                        fill={elem.color}
                        stroke="transparent"
                        onMouseOver={() => setActiveAddress(elem.id)}
                        onMouseOut={() => setActiveAddress(undefined)}
                    />
                ))}
            </Pie>
        </PieChart>
    );
});
