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
import type { BlockRaw } from './BlockRaw';
import {
    BlockRawFromJSON,
    BlockRawFromJSONTyped,
    BlockRawToJSON,
    BlockRawToJSONTyped,
} from './BlockRaw';
import type { GetRawListBlockTransactions200ResponseIdsInner } from './GetRawListBlockTransactions200ResponseIdsInner';
import {
    GetRawListBlockTransactions200ResponseIdsInnerFromJSON,
    GetRawListBlockTransactions200ResponseIdsInnerFromJSONTyped,
    GetRawListBlockTransactions200ResponseIdsInnerToJSON,
    GetRawListBlockTransactions200ResponseIdsInnerToJSONTyped,
} from './GetRawListBlockTransactions200ResponseIdsInner';

/**
 * 
 * @export
 * @interface GetRawListBlockTransactions200Response
 */
export interface GetRawListBlockTransactions200Response {
    /**
     * 
     * @type {BlockRaw}
     * @memberof GetRawListBlockTransactions200Response
     */
    id: BlockRaw;
    /**
     * 
     * @type {number}
     * @memberof GetRawListBlockTransactions200Response
     */
    reqCount: number;
    /**
     * 
     * @type {boolean}
     * @memberof GetRawListBlockTransactions200Response
     */
    incomplete: boolean;
    /**
     * 
     * @type {Array<GetRawListBlockTransactions200ResponseIdsInner>}
     * @memberof GetRawListBlockTransactions200Response
     */
    ids: Array<GetRawListBlockTransactions200ResponseIdsInner>;
    /**
     * 
     * @type {string}
     * @memberof GetRawListBlockTransactions200Response
     */
    proof: string;
}

/**
 * Check if a given object implements the GetRawListBlockTransactions200Response interface.
 */
export function instanceOfGetRawListBlockTransactions200Response(value: object): value is GetRawListBlockTransactions200Response {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('reqCount' in value) || value['reqCount'] === undefined) return false;
    if (!('incomplete' in value) || value['incomplete'] === undefined) return false;
    if (!('ids' in value) || value['ids'] === undefined) return false;
    if (!('proof' in value) || value['proof'] === undefined) return false;
    return true;
}

export function GetRawListBlockTransactions200ResponseFromJSON(json: any): GetRawListBlockTransactions200Response {
    return GetRawListBlockTransactions200ResponseFromJSONTyped(json, false);
}

export function GetRawListBlockTransactions200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRawListBlockTransactions200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': BlockRawFromJSON(json['id']),
        'reqCount': json['req_count'],
        'incomplete': json['incomplete'],
        'ids': ((json['ids'] as Array<any>).map(GetRawListBlockTransactions200ResponseIdsInnerFromJSON)),
        'proof': json['proof'],
    };
}

export function GetRawListBlockTransactions200ResponseToJSON(json: any): GetRawListBlockTransactions200Response {
    return GetRawListBlockTransactions200ResponseToJSONTyped(json, false);
}

export function GetRawListBlockTransactions200ResponseToJSONTyped(value?: GetRawListBlockTransactions200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': BlockRawToJSON(value['id']),
        'req_count': value['reqCount'],
        'incomplete': value['incomplete'],
        'ids': ((value['ids'] as Array<any>).map(GetRawListBlockTransactions200ResponseIdsInnerToJSON)),
        'proof': value['proof'],
    };
}

