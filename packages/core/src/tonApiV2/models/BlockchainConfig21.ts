/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { GasLimitPrices } from './GasLimitPrices';
import {
    GasLimitPricesFromJSON,
    GasLimitPricesFromJSONTyped,
    GasLimitPricesToJSON,
} from './GasLimitPrices';

/**
 * The cost of computations in the basechains. The complexity of any computation is estimated in gas units.
 * @export
 * @interface BlockchainConfig21
 */
export interface BlockchainConfig21 {
    /**
     * 
     * @type {GasLimitPrices}
     * @memberof BlockchainConfig21
     */
    gasLimitsPrices: GasLimitPrices;
}

/**
 * Check if a given object implements the BlockchainConfig21 interface.
 */
export function instanceOfBlockchainConfig21(value: object): boolean {
    if (!('gasLimitsPrices' in value)) return false;
    return true;
}

export function BlockchainConfig21FromJSON(json: any): BlockchainConfig21 {
    return BlockchainConfig21FromJSONTyped(json, false);
}

export function BlockchainConfig21FromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig21 {
    if (json == null) {
        return json;
    }
    return {
        
        'gasLimitsPrices': GasLimitPricesFromJSON(json['gas_limits_prices']),
    };
}

export function BlockchainConfig21ToJSON(value?: BlockchainConfig21 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'gas_limits_prices': GasLimitPricesToJSON(value['gasLimitsPrices']),
    };
}
