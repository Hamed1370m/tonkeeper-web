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
 * @interface SizeLimitsConfig
 */
export interface SizeLimitsConfig {
    /**
     * 
     * @type {number}
     * @memberof SizeLimitsConfig
     */
    maxMsgBits: number;
    /**
     * 
     * @type {number}
     * @memberof SizeLimitsConfig
     */
    maxMsgCells: number;
    /**
     * 
     * @type {number}
     * @memberof SizeLimitsConfig
     */
    maxLibraryCells: number;
    /**
     * 
     * @type {number}
     * @memberof SizeLimitsConfig
     */
    maxVmDataDepth: number;
    /**
     * 
     * @type {number}
     * @memberof SizeLimitsConfig
     */
    maxExtMsgSize: number;
    /**
     * 
     * @type {number}
     * @memberof SizeLimitsConfig
     */
    maxExtMsgDepth: number;
    /**
     * 
     * @type {number}
     * @memberof SizeLimitsConfig
     */
    maxAccStateCells?: number;
    /**
     * 
     * @type {number}
     * @memberof SizeLimitsConfig
     */
    maxAccStateBits?: number;
}

/**
 * Check if a given object implements the SizeLimitsConfig interface.
 */
export function instanceOfSizeLimitsConfig(value: object): value is SizeLimitsConfig {
    if (!('maxMsgBits' in value) || value['maxMsgBits'] === undefined) return false;
    if (!('maxMsgCells' in value) || value['maxMsgCells'] === undefined) return false;
    if (!('maxLibraryCells' in value) || value['maxLibraryCells'] === undefined) return false;
    if (!('maxVmDataDepth' in value) || value['maxVmDataDepth'] === undefined) return false;
    if (!('maxExtMsgSize' in value) || value['maxExtMsgSize'] === undefined) return false;
    if (!('maxExtMsgDepth' in value) || value['maxExtMsgDepth'] === undefined) return false;
    return true;
}

export function SizeLimitsConfigFromJSON(json: any): SizeLimitsConfig {
    return SizeLimitsConfigFromJSONTyped(json, false);
}

export function SizeLimitsConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): SizeLimitsConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'maxMsgBits': json['max_msg_bits'],
        'maxMsgCells': json['max_msg_cells'],
        'maxLibraryCells': json['max_library_cells'],
        'maxVmDataDepth': json['max_vm_data_depth'],
        'maxExtMsgSize': json['max_ext_msg_size'],
        'maxExtMsgDepth': json['max_ext_msg_depth'],
        'maxAccStateCells': json['max_acc_state_cells'] == null ? undefined : json['max_acc_state_cells'],
        'maxAccStateBits': json['max_acc_state_bits'] == null ? undefined : json['max_acc_state_bits'],
    };
}

  export function SizeLimitsConfigToJSON(json: any): SizeLimitsConfig {
      return SizeLimitsConfigToJSONTyped(json, false);
  }

  export function SizeLimitsConfigToJSONTyped(value?: SizeLimitsConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'max_msg_bits': value['maxMsgBits'],
        'max_msg_cells': value['maxMsgCells'],
        'max_library_cells': value['maxLibraryCells'],
        'max_vm_data_depth': value['maxVmDataDepth'],
        'max_ext_msg_size': value['maxExtMsgSize'],
        'max_ext_msg_depth': value['maxExtMsgDepth'],
        'max_acc_state_cells': value['maxAccStateCells'],
        'max_acc_state_bits': value['maxAccStateBits'],
    };
}
