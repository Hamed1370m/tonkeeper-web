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
import type { TokenRates } from './TokenRates';
import {
    TokenRatesFromJSON,
    TokenRatesFromJSONTyped,
    TokenRatesToJSON,
    TokenRatesToJSONTyped,
} from './TokenRates';

/**
 * 
 * @export
 * @interface GetRates200Response
 */
export interface GetRates200Response {
    /**
     * 
     * @type {{ [key: string]: TokenRates; }}
     * @memberof GetRates200Response
     */
    rates: { [key: string]: TokenRates; };
}

/**
 * Check if a given object implements the GetRates200Response interface.
 */
export function instanceOfGetRates200Response(value: object): value is GetRates200Response {
    if (!('rates' in value) || value['rates'] === undefined) return false;
    return true;
}

export function GetRates200ResponseFromJSON(json: any): GetRates200Response {
    return GetRates200ResponseFromJSONTyped(json, false);
}

export function GetRates200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRates200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'rates': (mapValues(json['rates'], TokenRatesFromJSON)),
    };
}

export function GetRates200ResponseToJSON(json: any): GetRates200Response {
    return GetRates200ResponseToJSONTyped(json, false);
}

export function GetRates200ResponseToJSONTyped(value?: GetRates200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'rates': (mapValues(value['rates'], TokenRatesToJSON)),
    };
}

