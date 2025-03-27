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
 * @interface NftItemCollection
 */
export interface NftItemCollection {
    /**
     * 
     * @type {string}
     * @memberof NftItemCollection
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof NftItemCollection
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NftItemCollection
     */
    description: string;
}

/**
 * Check if a given object implements the NftItemCollection interface.
 */
export function instanceOfNftItemCollection(value: object): value is NftItemCollection {
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    return true;
}

export function NftItemCollectionFromJSON(json: any): NftItemCollection {
    return NftItemCollectionFromJSONTyped(json, false);
}

export function NftItemCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftItemCollection {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'],
        'name': json['name'],
        'description': json['description'],
    };
}

export function NftItemCollectionToJSON(json: any): NftItemCollection {
    return NftItemCollectionToJSONTyped(json, false);
}

export function NftItemCollectionToJSONTyped(value?: NftItemCollection | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': value['address'],
        'name': value['name'],
        'description': value['description'],
    };
}

