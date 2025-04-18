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
 * @interface Method
 */
export interface Method {
    /**
     * 
     * @type {number}
     * @memberof Method
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Method
     */
    method: string;
}

/**
 * Check if a given object implements the Method interface.
 */
export function instanceOfMethod(value: object): value is Method {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('method' in value) || value['method'] === undefined) return false;
    return true;
}

export function MethodFromJSON(json: any): Method {
    return MethodFromJSONTyped(json, false);
}

export function MethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): Method {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'method': json['method'],
    };
}

export function MethodToJSON(json: any): Method {
    return MethodToJSONTyped(json, false);
}

export function MethodToJSONTyped(value?: Method | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'method': value['method'],
    };
}

