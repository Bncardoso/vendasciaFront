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
import { VendasListaDto } from '../models/vendas-lista-dto';

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
  static readonly ObterPorIdPath = '/api/api/v1/vendas/{id}';

  /**
   * Obter os dados completos de uma venda pelo ID informado!
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

): Observable<StrictHttpResponse<VendasDto>> {

    const rb = new RequestBuilder(this.rootUrl, VendasControllerService.ObterPorIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VendasDto>;
      })
    );
  }

  /**
   * Obter os dados completos de uma venda pelo ID informado!
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

): Observable<VendasDto> {

    return this.obterPorId$Response(params,context).pipe(
      map((r: StrictHttpResponse<VendasDto>) => r.body as VendasDto)
    );
  }

  /**
   * Path part for operation alterar
   */
  static readonly AlterarPath = '/api/api/v1/vendas/{id}';

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

): Observable<StrictHttpResponse<VendasDto>> {

    const rb = new RequestBuilder(this.rootUrl, VendasControllerService.AlterarPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VendasDto>;
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

): Observable<VendasDto> {

    return this.alterar$Response(params,context).pipe(
      map((r: StrictHttpResponse<VendasDto>) => r.body as VendasDto)
    );
  }

  /**
   * Path part for operation remover
   */
  static readonly RemoverPath = '/api/api/v1/vendas/{id}';

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

): Observable<StrictHttpResponse<VendasDto>> {

    const rb = new RequestBuilder(this.rootUrl, VendasControllerService.RemoverPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VendasDto>;
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
  remover(params: {
    id: number;
  },
  context?: HttpContext

): Observable<VendasDto> {

    return this.remover$Response(params,context).pipe(
      map((r: StrictHttpResponse<VendasDto>) => r.body as VendasDto)
    );
  }

  /**
   * Path part for operation incluir
   */
  static readonly IncluirPath = '/api/api/v1/vendas';

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

): Observable<StrictHttpResponse<VendasDto>> {

    const rb = new RequestBuilder(this.rootUrl, VendasControllerService.IncluirPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VendasDto>;
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

): Observable<VendasDto> {

    return this.incluir$Response(params,context).pipe(
      map((r: StrictHttpResponse<VendasDto>) => r.body as VendasDto)
    );
  }

  /**
   * Path part for operation pesquisar
   */
  static readonly PesquisarPath = '/api/api/v1/vendas/pesquisar';

  /**
   * Busca uma venda pelos dados informados
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `pesquisar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pesquisar$Response(params: {
    body: VendasDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<VendasListaDto>>> {

    const rb = new RequestBuilder(this.rootUrl, VendasControllerService.PesquisarPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<VendasListaDto>>;
      })
    );
  }

  /**
   * Busca uma venda pelos dados informados
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `pesquisar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  pesquisar(params: {
    body: VendasDto
  },
  context?: HttpContext

): Observable<Array<VendasListaDto>> {

    return this.pesquisar$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<VendasListaDto>>) => r.body as Array<VendasListaDto>)
    );
  }

  /**
   * Path part for operation listAll
   */
  static readonly ListAllPath = '/api/api/v1/vendas/listar';

  /**
   * Lista de Vendas
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<VendasListaDto>>> {

    const rb = new RequestBuilder(this.rootUrl, VendasControllerService.ListAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<VendasListaDto>>;
      })
    );
  }

  /**
   * Lista de Vendas
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll(params?: {
  },
  context?: HttpContext

): Observable<Array<VendasListaDto>> {

    return this.listAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<VendasListaDto>>) => r.body as Array<VendasListaDto>)
    );
  }

}
