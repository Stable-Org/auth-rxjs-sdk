// tslint:disable
/**
 * Stable - Auth Service
 * An authentication service API for Stable
 *
 * The version of the OpenAPI document: 0.0.3
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
    LoginUserRequestDto,
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
    authLoginControllerLogin({ loginUserRequestDto }: AuthLoginControllerLoginRequest): Observable<void>
    authLoginControllerLogin({ loginUserRequestDto }: AuthLoginControllerLoginRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>>
    authLoginControllerLogin({ loginUserRequestDto }: AuthLoginControllerLoginRequest, opts?: OperationOpts): Observable<void | AjaxResponse<void>> {
        throwIfNullOrUndefined(loginUserRequestDto, 'loginUserRequestDto', 'authLoginControllerLogin');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<void>({
            url: '/auth/users/login',
            method: 'POST',
            headers,
            body: loginUserRequestDto,
        }, opts?.responseOpts);
    };

}
