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
 * @interface ServiceStatus
 */
export interface ServiceStatus {
    /**
     * 
     * @type {boolean}
     * @memberof ServiceStatus
     */
    restOnline: boolean;
    /**
     * 
     * @type {number}
     * @memberof ServiceStatus
     */
    indexingLatency: number;
    /**
     * 
     * @type {number}
     * @memberof ServiceStatus
     */
    lastKnownMasterchainSeqno: number;
}

/**
 * Check if a given object implements the ServiceStatus interface.
 */
export function instanceOfServiceStatus(value: object): value is ServiceStatus {
    if (!('restOnline' in value) || value['restOnline'] === undefined) return false;
    if (!('indexingLatency' in value) || value['indexingLatency'] === undefined) return false;
    if (!('lastKnownMasterchainSeqno' in value) || value['lastKnownMasterchainSeqno'] === undefined) return false;
    return true;
}

export function ServiceStatusFromJSON(json: any): ServiceStatus {
    return ServiceStatusFromJSONTyped(json, false);
}

export function ServiceStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'restOnline': json['rest_online'],
        'indexingLatency': json['indexing_latency'],
        'lastKnownMasterchainSeqno': json['last_known_masterchain_seqno'],
    };
}

export function ServiceStatusToJSON(json: any): ServiceStatus {
    return ServiceStatusToJSONTyped(json, false);
}

export function ServiceStatusToJSONTyped(value?: ServiceStatus | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'rest_online': value['restOnline'],
        'indexing_latency': value['indexingLatency'],
        'last_known_masterchain_seqno': value['lastKnownMasterchainSeqno'],
    };
}

