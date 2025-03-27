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
import type { JettonPreview } from './JettonPreview';
import {
    JettonPreviewFromJSON,
    JettonPreviewFromJSONTyped,
    JettonPreviewToJSON,
    JettonPreviewToJSONTyped,
} from './JettonPreview';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
    AccountAddressToJSONTyped,
} from './AccountAddress';

/**
 * 
 * @export
 * @interface JettonBurnAction
 */
export interface JettonBurnAction {
    /**
     * 
     * @type {AccountAddress}
     * @memberof JettonBurnAction
     */
    sender: AccountAddress;
    /**
     * 
     * @type {string}
     * @memberof JettonBurnAction
     */
    sendersWallet: string;
    /**
     * amount in quanta of tokens
     * @type {string}
     * @memberof JettonBurnAction
     */
    amount: string;
    /**
     * 
     * @type {JettonPreview}
     * @memberof JettonBurnAction
     */
    jetton: JettonPreview;
}

/**
 * Check if a given object implements the JettonBurnAction interface.
 */
export function instanceOfJettonBurnAction(value: object): value is JettonBurnAction {
    if (!('sender' in value) || value['sender'] === undefined) return false;
    if (!('sendersWallet' in value) || value['sendersWallet'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('jetton' in value) || value['jetton'] === undefined) return false;
    return true;
}

export function JettonBurnActionFromJSON(json: any): JettonBurnAction {
    return JettonBurnActionFromJSONTyped(json, false);
}

export function JettonBurnActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): JettonBurnAction {
    if (json == null) {
        return json;
    }
    return {
        
        'sender': AccountAddressFromJSON(json['sender']),
        'sendersWallet': json['senders_wallet'],
        'amount': json['amount'],
        'jetton': JettonPreviewFromJSON(json['jetton']),
    };
}

export function JettonBurnActionToJSON(json: any): JettonBurnAction {
    return JettonBurnActionToJSONTyped(json, false);
}

export function JettonBurnActionToJSONTyped(value?: JettonBurnAction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sender': AccountAddressToJSON(value['sender']),
        'senders_wallet': value['sendersWallet'],
        'amount': value['amount'],
        'jetton': JettonPreviewToJSON(value['jetton']),
    };
}

