/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Translator
 * This is a sample translator server. For this sample, you can use the api key `special-key` to test the authorization filters. You can hire a translator and also get translations in your language (dummy :) ).
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * A translator for hire
 * @export
 * @interface Translator
 */
export interface Translator {
    /**
     * 
     * @type {number}
     * @memberof Translator
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Translator
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Translator
     */
    lang: string;
}

/**
 * Check if a given object implements the Translator interface.
 */
export function instanceOfTranslator(value: object): value is Translator {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('lang' in value) || value['lang'] === undefined) return false;
    return true;
}

export function TranslatorFromJSON(json: any): Translator {
    return TranslatorFromJSONTyped(json, false);
}

export function TranslatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Translator {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'lang': json['lang'],
    };
}

export function TranslatorToJSON(value?: Translator | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'lang': value['lang'],
    };
}
