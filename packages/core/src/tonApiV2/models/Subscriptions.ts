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
import type { Subscription } from './Subscription';
import {
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
    SubscriptionToJSONTyped,
} from './Subscription';

/**
 * 
 * @export
 * @interface Subscriptions
 */
export interface Subscriptions {
    /**
     * 
     * @type {Array<Subscription>}
     * @memberof Subscriptions
     */
    subscriptions: Array<Subscription>;
}

/**
 * Check if a given object implements the Subscriptions interface.
 */
export function instanceOfSubscriptions(value: object): value is Subscriptions {
    if (!('subscriptions' in value) || value['subscriptions'] === undefined) return false;
    return true;
}

export function SubscriptionsFromJSON(json: any): Subscriptions {
    return SubscriptionsFromJSONTyped(json, false);
}

export function SubscriptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subscriptions {
    if (json == null) {
        return json;
    }
    return {
        
        'subscriptions': ((json['subscriptions'] as Array<any>).map(SubscriptionFromJSON)),
    };
}

export function SubscriptionsToJSON(json: any): Subscriptions {
    return SubscriptionsToJSONTyped(json, false);
}

export function SubscriptionsToJSONTyped(value?: Subscriptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'subscriptions': ((value['subscriptions'] as Array<any>).map(SubscriptionToJSON)),
    };
}

