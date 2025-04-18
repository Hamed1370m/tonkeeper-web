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
import type { NftItem } from './NftItem';
import {
    NftItemFromJSON,
    NftItemFromJSONTyped,
    NftItemToJSON,
    NftItemToJSONTyped,
} from './NftItem';

/**
 * 
 * @export
 * @interface DomainInfo
 */
export interface DomainInfo {
    /**
     * 
     * @type {string}
     * @memberof DomainInfo
     */
    name: string;
    /**
     * date of expiring. optional. not all domain in ton has expiration date
     * @type {number}
     * @memberof DomainInfo
     */
    expiringAt?: number;
    /**
     * 
     * @type {NftItem}
     * @memberof DomainInfo
     */
    item?: NftItem;
}

/**
 * Check if a given object implements the DomainInfo interface.
 */
export function instanceOfDomainInfo(value: object): value is DomainInfo {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function DomainInfoFromJSON(json: any): DomainInfo {
    return DomainInfoFromJSONTyped(json, false);
}

export function DomainInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'expiringAt': json['expiring_at'] == null ? undefined : json['expiring_at'],
        'item': json['item'] == null ? undefined : NftItemFromJSON(json['item']),
    };
}

export function DomainInfoToJSON(json: any): DomainInfo {
    return DomainInfoToJSONTyped(json, false);
}

export function DomainInfoToJSONTyped(value?: DomainInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'expiring_at': value['expiringAt'],
        'item': NftItemToJSON(value['item']),
    };
}

