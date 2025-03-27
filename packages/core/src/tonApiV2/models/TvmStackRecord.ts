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
/**
 * 
 * @export
 * @interface TvmStackRecord
 */
export interface TvmStackRecord {
    /**
     * 
     * @type {string}
     * @memberof TvmStackRecord
     */
    type: TvmStackRecordTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TvmStackRecord
     */
    cell?: string;
    /**
     * 
     * @type {string}
     * @memberof TvmStackRecord
     */
    slice?: string;
    /**
     * 
     * @type {string}
     * @memberof TvmStackRecord
     */
    num?: string;
    /**
     * 
     * @type {Array<TvmStackRecord>}
     * @memberof TvmStackRecord
     */
    tuple?: Array<TvmStackRecord>;
}


/**
 * @export
 */
export const TvmStackRecordTypeEnum = {
    Cell: 'cell',
    Num: 'num',
    Nan: 'nan',
    Null: 'null',
    Tuple: 'tuple'
} as const;
export type TvmStackRecordTypeEnum = typeof TvmStackRecordTypeEnum[keyof typeof TvmStackRecordTypeEnum];


/**
 * Check if a given object implements the TvmStackRecord interface.
 */
export function instanceOfTvmStackRecord(value: object): value is TvmStackRecord {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function TvmStackRecordFromJSON(json: any): TvmStackRecord {
    return TvmStackRecordFromJSONTyped(json, false);
}

export function TvmStackRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): TvmStackRecord {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'cell': json['cell'] == null ? undefined : json['cell'],
        'slice': json['slice'] == null ? undefined : json['slice'],
        'num': json['num'] == null ? undefined : json['num'],
        'tuple': json['tuple'] == null ? undefined : ((json['tuple'] as Array<any>).map(TvmStackRecordFromJSON)),
    };
}

export function TvmStackRecordToJSON(json: any): TvmStackRecord {
    return TvmStackRecordToJSONTyped(json, false);
}

export function TvmStackRecordToJSONTyped(value?: TvmStackRecord | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'cell': value['cell'],
        'slice': value['slice'],
        'num': value['num'],
        'tuple': value['tuple'] == null ? undefined : ((value['tuple'] as Array<any>).map(TvmStackRecordToJSON)),
    };
}

