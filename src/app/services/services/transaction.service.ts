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

import { TransactionDto } from '../models/transaction-dto';

@Injectable({
  providedIn: 'root',
})
export class TransactionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAllTransactions
   */
  static readonly FindAllTransactionsPath = '/transactions/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllTransactions()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllTransactions$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<TransactionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionService.FindAllTransactionsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TransactionDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllTransactions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllTransactions(params?: {
  },
  context?: HttpContext

): Observable<Array<TransactionDto>> {

    return this.findAllTransactions$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<TransactionDto>>) => r.body as Array<TransactionDto>)
    );
  }

  /**
   * Path part for operation saveTransaction
   */
  static readonly SaveTransactionPath = '/transactions/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveTransaction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveTransaction$Response(params: {
    body: TransactionDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionService.SaveTransactionPath, 'post');
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
   * To access the full response (for headers, for example), `saveTransaction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveTransaction(params: {
    body: TransactionDto
  },
  context?: HttpContext

): Observable<number> {

    return this.saveTransaction$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation findTransactionById
   */
  static readonly FindTransactionByIdPath = '/transactions/{transaction-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findTransactionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findTransactionById$Response(params: {
    'transaction-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TransactionDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionService.FindTransactionByIdPath, 'get');
    if (params) {
      rb.path('transaction-id', params['transaction-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TransactionDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findTransactionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findTransactionById(params: {
    'transaction-id': number;
  },
  context?: HttpContext

): Observable<TransactionDto> {

    return this.findTransactionById$Response(params,context).pipe(
      map((r: StrictHttpResponse<TransactionDto>) => r.body as TransactionDto)
    );
  }

  /**
   * Path part for operation deleteTransaction
   */
  static readonly DeleteTransactionPath = '/transactions/{transaction-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTransaction()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTransaction$Response(params: {
    'transaction-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionService.DeleteTransactionPath, 'delete');
    if (params) {
      rb.path('transaction-id', params['transaction-id'], {});
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
   * To access the full response (for headers, for example), `deleteTransaction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTransaction(params: {
    'transaction-id': number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteTransaction$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findAllTransactionsByUserId
   */
  static readonly FindAllTransactionsByUserIdPath = '/transactions/users/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllTransactionsByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllTransactionsByUserId$Response(params: {
    'user-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<TransactionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionService.FindAllTransactionsByUserIdPath, 'get');
    if (params) {
      rb.path('user-id', params['user-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TransactionDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllTransactionsByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllTransactionsByUserId(params: {
    'user-id': number;
  },
  context?: HttpContext

): Observable<Array<TransactionDto>> {

    return this.findAllTransactionsByUserId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<TransactionDto>>) => r.body as Array<TransactionDto>)
    );
  }

}
