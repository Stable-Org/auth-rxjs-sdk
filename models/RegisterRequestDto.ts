// tslint:disable
/**
 * Stable - Auth Service
 * An authentication service API for Stable
 *
 * The version of the OpenAPI document: 0.0.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface RegisterRequestDto
 */
export interface RegisterRequestDto {
    /**
     * The email of the user
     * @type {string}
     * @memberof RegisterRequestDto
     */
    email: string;
    /**
     * The password of the user
     * @type {string}
     * @memberof RegisterRequestDto
     */
    password: string;
    /**
     * The given name of the user
     * @type {string}
     * @memberof RegisterRequestDto
     */
    givenName: string;
    /**
     * The family name of the user
     * @type {string}
     * @memberof RegisterRequestDto
     */
    familyName: string;
    /**
     * Gender query parameter
     * @type {string}
     * @memberof RegisterRequestDto
     */
    gender?: RegisterRequestDtoGenderEnum;
    /**
     * Acceptance of Terms and Privacy Policy
     * @type {boolean}
     * @memberof RegisterRequestDto
     */
    acceptTerms: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum RegisterRequestDtoGenderEnum {
    Male = 'male',
    Female = 'female'
}

