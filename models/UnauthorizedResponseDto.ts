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
 * @interface UnauthorizedResponseDto
 */
export interface UnauthorizedResponseDto {
    /**
     * HTTP status code of the error
     * @type {number}
     * @memberof UnauthorizedResponseDto
     */
    statusCode: number;
    /**
     * Short description of the error
     * @type {string}
     * @memberof UnauthorizedResponseDto
     */
    message: string;
    /**
     * Error type
     * @type {string}
     * @memberof UnauthorizedResponseDto
     */
    error: string;
}
