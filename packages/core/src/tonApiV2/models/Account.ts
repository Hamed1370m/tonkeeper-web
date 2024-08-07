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
import type { AccountStatus } from './AccountStatus';
import {
    AccountStatusFromJSON,
    AccountStatusFromJSONTyped,
    AccountStatusToJSON,
} from './AccountStatus';

/**
 * 
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    address: string;
    /**
     * 
     * @type {number}
     * @memberof Account
     */
    balance: number;
    /**
     * {'USD': 1, 'IDR': 1000}
     * @type {{ [key: string]: any; }}
     * @memberof Account
     */
    currenciesBalance?: { [key: string]: any; };
    /**
     * unix timestamp
     * @type {number}
     * @memberof Account
     */
    lastActivity: number;
    /**
     * 
     * @type {AccountStatus}
     * @memberof Account
     */
    status: AccountStatus;
    /**
     * 
     * @type {Array<string>}
     * @memberof Account
     */
    interfaces?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Account
     */
    isScam?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    icon?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Account
     */
    memoRequired?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Account
     */
    getMethods: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof Account
     */
    isSuspended?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Account
     */
    isWallet: boolean;
}



/**
 * Check if a given object implements the Account interface.
 */
export function instanceOfAccount(value: object): value is Account {
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('balance' in value) || value['balance'] === undefined) return false;
    if (!('lastActivity' in value) || value['lastActivity'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('getMethods' in value) || value['getMethods'] === undefined) return false;
    if (!('isWallet' in value) || value['isWallet'] === undefined) return false;
    return true;
}

export function AccountFromJSON(json: any): Account {
    return AccountFromJSONTyped(json, false);
}

export function AccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Account {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'],
        'balance': json['balance'],
        'currenciesBalance': json['currencies_balance'] == null ? undefined : json['currencies_balance'],
        'lastActivity': json['last_activity'],
        'status': AccountStatusFromJSON(json['status']),
        'interfaces': json['interfaces'] == null ? undefined : json['interfaces'],
        'name': json['name'] == null ? undefined : json['name'],
        'isScam': json['is_scam'] == null ? undefined : json['is_scam'],
        'icon': json['icon'] == null ? undefined : json['icon'],
        'memoRequired': json['memo_required'] == null ? undefined : json['memo_required'],
        'getMethods': json['get_methods'],
        'isSuspended': json['is_suspended'] == null ? undefined : json['is_suspended'],
        'isWallet': json['is_wallet'],
    };
}

export function AccountToJSON(value?: Account | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'address': value['address'],
        'balance': value['balance'],
        'currencies_balance': value['currenciesBalance'],
        'last_activity': value['lastActivity'],
        'status': AccountStatusToJSON(value['status']),
        'interfaces': value['interfaces'],
        'name': value['name'],
        'is_scam': value['isScam'],
        'icon': value['icon'],
        'memo_required': value['memoRequired'],
        'get_methods': value['getMethods'],
        'is_suspended': value['isSuspended'],
        'is_wallet': value['isWallet'],
    };
}

