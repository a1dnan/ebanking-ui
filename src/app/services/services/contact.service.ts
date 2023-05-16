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

import { ContactDto } from '../models/contact-dto';

@Injectable({
  providedIn: 'root',
})
export class ContactService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findAllContacts
   */
  static readonly FindAllContactsPath = '/contacts/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllContacts()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllContacts$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ContactDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ContactService.FindAllContactsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ContactDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllContacts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllContacts(params?: {
  },
  context?: HttpContext

): Observable<Array<ContactDto>> {

    return this.findAllContacts$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ContactDto>>) => r.body as Array<ContactDto>)
    );
  }

  /**
   * Path part for operation saveContact
   */
  static readonly SaveContactPath = '/contacts/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveContact()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveContact$Response(params: {
    body: ContactDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ContactService.SaveContactPath, 'post');
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
   * To access the full response (for headers, for example), `saveContact$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveContact(params: {
    body: ContactDto
  },
  context?: HttpContext

): Observable<number> {

    return this.saveContact$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation findContactById
   */
  static readonly FindContactByIdPath = '/contacts/{contact-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findContactById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findContactById$Response(params: {
    'contact-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ContactDto>> {

    const rb = new RequestBuilder(this.rootUrl, ContactService.FindContactByIdPath, 'get');
    if (params) {
      rb.path('contact-id', params['contact-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ContactDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findContactById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findContactById(params: {
    'contact-id': number;
  },
  context?: HttpContext

): Observable<ContactDto> {

    return this.findContactById$Response(params,context).pipe(
      map((r: StrictHttpResponse<ContactDto>) => r.body as ContactDto)
    );
  }

  /**
   * Path part for operation deleteContact
   */
  static readonly DeleteContactPath = '/contacts/{contact-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteContact()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteContact$Response(params: {
    'contact-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ContactService.DeleteContactPath, 'delete');
    if (params) {
      rb.path('contact-id', params['contact-id'], {});
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
   * To access the full response (for headers, for example), `deleteContact$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteContact(params: {
    'contact-id': number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteContact$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findAllContactsByUserId
   */
  static readonly FindAllContactsByUserIdPath = '/contacts/users/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllContactsByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllContactsByUserId$Response(params: {
    'user-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ContactDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ContactService.FindAllContactsByUserIdPath, 'get');
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
        return r as StrictHttpResponse<Array<ContactDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllContactsByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllContactsByUserId(params: {
    'user-id': number;
  },
  context?: HttpContext

): Observable<Array<ContactDto>> {

    return this.findAllContactsByUserId$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ContactDto>>) => r.body as Array<ContactDto>)
    );
  }

}
