/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AccountDto } from '../models/account-dto';

@Injectable({
  providedIn: 'root',
})
export class AccountService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAllAccounts
   */
  static readonly FindAllAccountsPath = '/accounts/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllAccounts()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllAccounts$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<AccountDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.FindAllAccountsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AccountDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllAccounts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllAccounts(params?: {
  },
  context?: HttpContext

): Observable<Array<AccountDto>> {

    return this.findAllAccounts$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<AccountDto>>) => r.body as Array<AccountDto>)
    );
  }

  /**
   * Path part for operation saveAccount
   */
  static readonly SaveAccountPath = '/accounts/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveAccount()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAccount$Response(params: {
    body: AccountDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.SaveAccountPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveAccount$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAccount(params: {
    body: AccountDto
  },
  context?: HttpContext

): Observable<number> {

    return this.saveAccount$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation findAccountById
   */
  static readonly FindAccountByIdPath = '/accounts/{account-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAccountById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAccountById$Response(params: {
    'account-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AccountDto>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.FindAccountByIdPath, 'get');
    if (params) {
      rb.path('account-id', params['account-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AccountDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAccountById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAccountById(params: {
    'account-id': number;
  },
  context?: HttpContext

): Observable<AccountDto> {

    return this.findAccountById$Response(params,context).pipe(
      map((r: StrictHttpResponse<AccountDto>) => r.body as AccountDto)
    );
  }

  /**
   * Path part for operation deleteAccount
   */
  static readonly DeleteAccountPath = '/accounts/{account-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAccount$Response(params: {
    'account-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.DeleteAccountPath, 'delete');
    if (params) {
      rb.path('account-id', params['account-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAccount(params: {
    'account-id': number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteAccount$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
