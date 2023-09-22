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
 * @interface LoginResponseDto
 */
export interface LoginResponseDto {
    /**
     * The ID token for the user
     * @type {string}
     * @memberof LoginResponseDto
     */
    idToken: string;
    /**
     * The access token for the user
     * @type {string}
     * @memberof LoginResponseDto
     */
    accessToken: string;
    /**
     * The refresh token for the user
     * @type {string}
     * @memberof LoginResponseDto
     */
    refreshToken: string;
}
