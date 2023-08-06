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

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined } from '../runtime';
import type { OperationOpts, HttpHeaders } from '../runtime';
import type {
    BadRequestResponseDto,
    LoginUserRequestDto,
    LoginUserResponseDto,
    UnauthorizedResponseDto,
} from '../models';

export interface AuthLoginControllerLoginRequest {
    loginUserRequestDto: LoginUserRequestDto;
}

/**
 * no description
 */
export class AuthApi extends BaseAPI {

    /**
     * Log in a user
     */
    authLoginControllerLogin({ loginUserRequestDto }: AuthLoginControllerLoginRequest): Observable<LoginUserResponseDto>
    authLoginControllerLogin({ loginUserRequestDto }: AuthLoginControllerLoginRequest, opts?: OperationOpts): Observable<AjaxResponse<LoginUserResponseDto>>
    authLoginControllerLogin({ loginUserRequestDto }: AuthLoginControllerLoginRequest, opts?: OperationOpts): Observable<LoginUserResponseDto | AjaxResponse<LoginUserResponseDto>> {
        throwIfNullOrUndefined(loginUserRequestDto, 'loginUserRequestDto', 'authLoginControllerLogin');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<LoginUserResponseDto>({
            url: '/auth/users/login',
            method: 'POST',
            headers,
            body: loginUserRequestDto,
        }, opts?.responseOpts);
    };

}
