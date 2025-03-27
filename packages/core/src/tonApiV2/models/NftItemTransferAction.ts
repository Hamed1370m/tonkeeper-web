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
import type { Refund } from './Refund';
import {
    RefundFromJSON,
    RefundFromJSONTyped,
    RefundToJSON,
    RefundToJSONTyped,
} from './Refund';
import type { EncryptedComment } from './EncryptedComment';
import {
    EncryptedCommentFromJSON,
    EncryptedCommentFromJSONTyped,
    EncryptedCommentToJSON,
    EncryptedCommentToJSONTyped,
} from './EncryptedComment';
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
 * @interface NftItemTransferAction
 */
export interface NftItemTransferAction {
    /**
     * 
     * @type {AccountAddress}
     * @memberof NftItemTransferAction
     */
    sender?: AccountAddress;
    /**
     * 
     * @type {AccountAddress}
     * @memberof NftItemTransferAction
     */
    recipient?: AccountAddress;
    /**
     * 
     * @type {string}
     * @memberof NftItemTransferAction
     */
    nft: string;
    /**
     * 
     * @type {string}
     * @memberof NftItemTransferAction
     */
    comment?: string;
    /**
     * 
     * @type {EncryptedComment}
     * @memberof NftItemTransferAction
     */
    encryptedComment?: EncryptedComment;
    /**
     * raw hex encoded payload
     * @type {string}
     * @memberof NftItemTransferAction
     */
    payload?: string;
    /**
     * 
     * @type {Refund}
     * @memberof NftItemTransferAction
     */
    refund?: Refund;
}

/**
 * Check if a given object implements the NftItemTransferAction interface.
 */
export function instanceOfNftItemTransferAction(value: object): value is NftItemTransferAction {
    if (!('nft' in value) || value['nft'] === undefined) return false;
    return true;
}

export function NftItemTransferActionFromJSON(json: any): NftItemTransferAction {
    return NftItemTransferActionFromJSONTyped(json, false);
}

export function NftItemTransferActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftItemTransferAction {
    if (json == null) {
        return json;
    }
    return {
        
        'sender': json['sender'] == null ? undefined : AccountAddressFromJSON(json['sender']),
        'recipient': json['recipient'] == null ? undefined : AccountAddressFromJSON(json['recipient']),
        'nft': json['nft'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'encryptedComment': json['encrypted_comment'] == null ? undefined : EncryptedCommentFromJSON(json['encrypted_comment']),
        'payload': json['payload'] == null ? undefined : json['payload'],
        'refund': json['refund'] == null ? undefined : RefundFromJSON(json['refund']),
    };
}

export function NftItemTransferActionToJSON(json: any): NftItemTransferAction {
    return NftItemTransferActionToJSONTyped(json, false);
}

export function NftItemTransferActionToJSONTyped(value?: NftItemTransferAction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sender': AccountAddressToJSON(value['sender']),
        'recipient': AccountAddressToJSON(value['recipient']),
        'nft': value['nft'],
        'comment': value['comment'],
        'encrypted_comment': EncryptedCommentToJSON(value['encryptedComment']),
        'payload': value['payload'],
        'refund': RefundToJSON(value['refund']),
    };
}

