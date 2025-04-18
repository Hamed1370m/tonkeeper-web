/* tslint:disable */
/* eslint-disable */
/**
 * Custodial-Battery REST API.
 * REST API for Custodial Battery which provides gas to different networks to help execute transactions.
 *
 * The version of the OpenAPI document: 0.0.1
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
 * @interface Balance
 */
export interface Balance {
    /**
     * 
     * @type {string}
     * @memberof Balance
     */
    balance: string;
    /**
     * reserved amount in units (TON/USD)
     * @type {string}
     * @memberof Balance
     */
    reserved: string;
    /**
     * 
     * @type {string}
     * @memberof Balance
     */
    units: BalanceUnitsEnum;
}


/**
 * @export
 */
export const BalanceUnitsEnum = {
    Usd: 'usd',
    Ton: 'ton'
} as const;
export type BalanceUnitsEnum = typeof BalanceUnitsEnum[keyof typeof BalanceUnitsEnum];


/**
 * Check if a given object implements the Balance interface.
 */
export function instanceOfBalance(value: object): value is Balance {
    if (!('balance' in value) || value['balance'] === undefined) return false;
    if (!('reserved' in value) || value['reserved'] === undefined) return false;
    if (!('units' in value) || value['units'] === undefined) return false;
    return true;
}

export function BalanceFromJSON(json: any): Balance {
    return BalanceFromJSONTyped(json, false);
}

export function BalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Balance {
    if (json == null) {
        return json;
    }
    return {
        
        'balance': json['balance'],
        'reserved': json['reserved'],
        'units': json['units'],
    };
}

  export function BalanceToJSON(json: any): Balance {
      return BalanceToJSONTyped(json, false);
  }

  export function BalanceToJSONTyped(value?: Balance | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'balance': value['balance'],
        'reserved': value['reserved'],
        'units': value['units'],
    };
}

