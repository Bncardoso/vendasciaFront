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

import { VendasDto } from '../models/vendas-dto';
import { VendasDadosAlteravelDto } from '../models/vendas-dados-alteravel-dto';

@Injectable({
  providedIn: 'root',
})
export class VendasControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation obterPorId
   */
  static readonly ObterPorIdPath = '/v1/vendas/{id}';

  /**
   * Obter venda pelo ID informado!
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obterPorId()` instead.
   *
   * This method doesn't expect any request body.
   */
  obterPorId$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, VendasControllerService.ObterPorIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Obter venda pelo ID informado!
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obterPorId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obterPorId(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.obterPorId$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation alterar
   */
  static readonly AlterarPath = '/v1/vendas/{id}';

  /**
   * Metodo utilizado para alterar dados de uma venda
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alterar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterar$Response(params: {
    id: number;
    body: VendasDadosAlteravelDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, VendasControllerService.AlterarPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Metodo utilizado para alterar dados de uma venda
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `alterar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterar(params: {
    id: number;
    body: VendasDadosAlteravelDto
  },
  context?: HttpContext

): Observable<any> {

    return this.alterar$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation remover
   */
  static readonly RemoverPath = '/v1/vendas/{id}';

  /**
   * Método utililzado para remover uma venda pelo ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `remover()` instead.
   *
   * This method doesn't expect any request body.
   */
  remover$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, VendasControllerService.RemoverPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Método utililzado para remover uma venda pelo ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `remover$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  remover(params: { id: number },
          context?: HttpContext
  ): Observable<any> {

    return this.remover$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation listAll
   */
  static readonly ListAllPath = '/v1/vendas';

  /**
   * Listagem geral de Vendas
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<VendasDto>>> {

    const rb = new RequestBuilder(this.rootUrl, VendasControllerService.ListAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<VendasDto>>;
      })
    );
  }

  /**
   * Listagem geral de Vendas
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll(params?: {
  },
  context?: HttpContext

): Observable<Array<VendasDto>> {

    return this.listAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<VendasDto>>) => r.body as Array<VendasDto>)
    );
  }

  /**
   * Path part for operation incluir
   */
  static readonly IncluirPath = '/v1/vendas';

  /**
   * Método utilizado para realizar inclusão de vendas
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incluir()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluir$Response(params: {
    body: VendasDadosAlteravelDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<VendasDto>>> {

    const rb = new RequestBuilder(this.rootUrl, VendasControllerService.IncluirPath, 'post');
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
        return r as StrictHttpResponse<Array<VendasDto>>;
      })
    );
  }

  /**
   * Método utilizado para realizar inclusão de vendas
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `incluir$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluir(params: {
    body: VendasDadosAlteravelDto
  },
  context?: HttpContext

): Observable<Array<VendasDto>> {

    return this.incluir$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<VendasDto>>) => r.body as Array<VendasDto>)
    );
  }

  /**
   * Path part for operation localizarPorNomeCliente
   */
  static readonly LocalizarPorNomeClientePath = '/v1/vendas/cliente/{nomeCliente}';

  /**
   * Busca vendas pelo nome do cliente informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `localizarPorNomeCliente()` instead.
   *
   * This method doesn't expect any request body.
   */
  localizarPorNomeCliente$Response(params: {
    nomeCliente: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, VendasControllerService.LocalizarPorNomeClientePath, 'get');
    if (params) {
      rb.path('nomeCliente', params.nomeCliente, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Busca vendas pelo nome do cliente informado
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `localizarPorNomeCliente$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  localizarPorNomeCliente(params: {
    nomeCliente: string;
  },
  context?: HttpContext

): Observable<any> {

    return this.localizarPorNomeCliente$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

}
