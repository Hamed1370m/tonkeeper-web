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
 * @interface EnterpriseWalletConfig
 */
export interface EnterpriseWalletConfig {
    /**
     * when building a message to transfer an NFT or Jetton, use this address to send excess funds back to Battery Service.
     * @type {string}
     * @memberof EnterpriseWalletConfig
     */
    excessAccount: string;
}

/**
 * Check if a given object implements the EnterpriseWalletConfig interface.
 */
export function instanceOfEnterpriseWalletConfig(value: object): value is EnterpriseWalletConfig {
    if (!('excessAccount' in value) || value['excessAccount'] === undefined) return false;
    return true;
}

export function EnterpriseWalletConfigFromJSON(json: any): EnterpriseWalletConfig {
    return EnterpriseWalletConfigFromJSONTyped(json, false);
}

export function EnterpriseWalletConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnterpriseWalletConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'excessAccount': json['excess_account'],
    };
}

  export function EnterpriseWalletConfigToJSON(json: any): EnterpriseWalletConfig {
      return EnterpriseWalletConfigToJSONTyped(json, false);
  }

  export function EnterpriseWalletConfigToJSONTyped(value?: EnterpriseWalletConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'excess_account': value['excessAccount'],
    };
}

