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

import { AddressDto } from '../models/address-dto';

@Injectable({
  providedIn: 'root',
})
export class AddressService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAllAddresses
   */
  static readonly FindAllAddressesPath = '/addresses/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllAddresses()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllAddresses$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<AddressDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.FindAllAddressesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AddressDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllAddresses$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllAddresses(params?: {
  },
  context?: HttpContext

): Observable<Array<AddressDto>> {

    return this.findAllAddresses$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<AddressDto>>) => r.body as Array<AddressDto>)
    );
  }

  /**
   * Path part for operation saveAddress
   */
  static readonly SaveAddressPath = '/addresses/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveAddress()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAddress$Response(params: {
    body: AddressDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.SaveAddressPath, 'post');
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
   * To access the full response (for headers, for example), `saveAddress$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveAddress(params: {
    body: AddressDto
  },
  context?: HttpContext

): Observable<number> {

    return this.saveAddress$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation findAddressById
   */
  static readonly FindAddressByIdPath = '/addresses/{address-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAddressById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAddressById$Response(params: {
    'address-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AddressDto>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.FindAddressByIdPath, 'get');
    if (params) {
      rb.path('address-id', params['address-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AddressDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAddressById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAddressById(params: {
    'address-id': number;
  },
  context?: HttpContext

): Observable<AddressDto> {

    return this.findAddressById$Response(params,context).pipe(
      map((r: StrictHttpResponse<AddressDto>) => r.body as AddressDto)
    );
  }

  /**
   * Path part for operation deleteAddress
   */
  static readonly DeleteAddressPath = '/addresses/{address-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAddress()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAddress$Response(params: {
    'address-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.DeleteAddressPath, 'delete');
    if (params) {
      rb.path('address-id', params['address-id'], {});
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
   * To access the full response (for headers, for example), `deleteAddress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAddress(params: {
    'address-id': number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteAddress$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
