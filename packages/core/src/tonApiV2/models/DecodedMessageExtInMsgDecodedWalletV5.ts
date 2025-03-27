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
import type { DecodedRawMessage } from './DecodedRawMessage';
import {
    DecodedRawMessageFromJSON,
    DecodedRawMessageFromJSONTyped,
    DecodedRawMessageToJSON,
    DecodedRawMessageToJSONTyped,
} from './DecodedRawMessage';

/**
 * 
 * @export
 * @interface DecodedMessageExtInMsgDecodedWalletV5
 */
export interface DecodedMessageExtInMsgDecodedWalletV5 {
    /**
     * 
     * @type {number}
     * @memberof DecodedMessageExtInMsgDecodedWalletV5
     */
    validUntil: number;
    /**
     * 
     * @type {Array<DecodedRawMessage>}
     * @memberof DecodedMessageExtInMsgDecodedWalletV5
     */
    rawMessages: Array<DecodedRawMessage>;
}

/**
 * Check if a given object implements the DecodedMessageExtInMsgDecodedWalletV5 interface.
 */
export function instanceOfDecodedMessageExtInMsgDecodedWalletV5(value: object): value is DecodedMessageExtInMsgDecodedWalletV5 {
    if (!('validUntil' in value) || value['validUntil'] === undefined) return false;
    if (!('rawMessages' in value) || value['rawMessages'] === undefined) return false;
    return true;
}

export function DecodedMessageExtInMsgDecodedWalletV5FromJSON(json: any): DecodedMessageExtInMsgDecodedWalletV5 {
    return DecodedMessageExtInMsgDecodedWalletV5FromJSONTyped(json, false);
}

export function DecodedMessageExtInMsgDecodedWalletV5FromJSONTyped(json: any, ignoreDiscriminator: boolean): DecodedMessageExtInMsgDecodedWalletV5 {
    if (json == null) {
        return json;
    }
    return {
        
        'validUntil': json['valid_until'],
        'rawMessages': ((json['raw_messages'] as Array<any>).map(DecodedRawMessageFromJSON)),
    };
}

export function DecodedMessageExtInMsgDecodedWalletV5ToJSON(json: any): DecodedMessageExtInMsgDecodedWalletV5 {
    return DecodedMessageExtInMsgDecodedWalletV5ToJSONTyped(json, false);
}

export function DecodedMessageExtInMsgDecodedWalletV5ToJSONTyped(value?: DecodedMessageExtInMsgDecodedWalletV5 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'valid_until': value['validUntil'],
        'raw_messages': ((value['rawMessages'] as Array<any>).map(DecodedRawMessageToJSON)),
    };
}

