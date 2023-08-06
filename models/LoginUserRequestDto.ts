// tslint:disable
/**
 * Stable - Auth Service
 * An authentication service API for Stable
 *
 * The version of the OpenAPI document: 0.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface LoginUserRequestDto
 */
export interface LoginUserRequestDto {
    /**
     * The email of the user
     * @type {string}
     * @memberof LoginUserRequestDto
     */
    email: string;
    /**
     * The password of the user (minimum 8 characters)
     * @type {string}
     * @memberof LoginUserRequestDto
     */
    password: string;
    /**
     * The new password to set for the user (optional, minimum 8 characters)
     * @type {string}
     * @memberof LoginUserRequestDto
     */
    newPassword?: string;
}
