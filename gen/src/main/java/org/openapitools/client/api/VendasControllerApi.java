/*
 * Sistema de Gerenciamento de Vendas
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiCallback;
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.ApiResponse;
import org.openapitools.client.Configuration;
import org.openapitools.client.Pair;
import org.openapitools.client.ProgressRequestBody;
import org.openapitools.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import org.openapitools.client.model.VendasDTO;
import org.openapitools.client.model.VendasDadosAlteravelDTO;
import org.openapitools.client.model.VendasListaDTO;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class VendasControllerApi {
    private ApiClient localVarApiClient;

    public VendasControllerApi() {
        this(Configuration.getDefaultApiClient());
    }

    public VendasControllerApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for alterar
     * @param id  (required)
     * @param vendasDadosAlteravelDTO  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call alterarCall(Long id, VendasDadosAlteravelDTO vendasDadosAlteravelDTO, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = vendasDadosAlteravelDTO;

        // create path and map variables
        String localVarPath = "/v1/vendas/{id}"
            .replaceAll("\\{" + "id" + "\\}", localVarApiClient.escapeString(id.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "*/*"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "PUT", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call alterarValidateBeforeCall(Long id, VendasDadosAlteravelDTO vendasDadosAlteravelDTO, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'id' is set
        if (id == null) {
            throw new ApiException("Missing the required parameter 'id' when calling alterar(Async)");
        }
        
        // verify the required parameter 'vendasDadosAlteravelDTO' is set
        if (vendasDadosAlteravelDTO == null) {
            throw new ApiException("Missing the required parameter 'vendasDadosAlteravelDTO' when calling alterar(Async)");
        }
        

        okhttp3.Call localVarCall = alterarCall(id, vendasDadosAlteravelDTO, _callback);
        return localVarCall;

    }

    /**
     * 
     * Metodo utilizado para alterar dados de uma venda
     * @param id  (required)
     * @param vendasDadosAlteravelDTO  (required)
     * @return VendasDTO
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public VendasDTO alterar(Long id, VendasDadosAlteravelDTO vendasDadosAlteravelDTO) throws ApiException {
        ApiResponse<VendasDTO> localVarResp = alterarWithHttpInfo(id, vendasDadosAlteravelDTO);
        return localVarResp.getData();
    }

    /**
     * 
     * Metodo utilizado para alterar dados de uma venda
     * @param id  (required)
     * @param vendasDadosAlteravelDTO  (required)
     * @return ApiResponse&lt;VendasDTO&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<VendasDTO> alterarWithHttpInfo(Long id, VendasDadosAlteravelDTO vendasDadosAlteravelDTO) throws ApiException {
        okhttp3.Call localVarCall = alterarValidateBeforeCall(id, vendasDadosAlteravelDTO, null);
        Type localVarReturnType = new TypeToken<VendasDTO>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * Metodo utilizado para alterar dados de uma venda
     * @param id  (required)
     * @param vendasDadosAlteravelDTO  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call alterarAsync(Long id, VendasDadosAlteravelDTO vendasDadosAlteravelDTO, final ApiCallback<VendasDTO> _callback) throws ApiException {

        okhttp3.Call localVarCall = alterarValidateBeforeCall(id, vendasDadosAlteravelDTO, _callback);
        Type localVarReturnType = new TypeToken<VendasDTO>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for incluir
     * @param vendasDadosAlteravelDTO  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call incluirCall(VendasDadosAlteravelDTO vendasDadosAlteravelDTO, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = vendasDadosAlteravelDTO;

        // create path and map variables
        String localVarPath = "/v1/vendas";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "*/*"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call incluirValidateBeforeCall(VendasDadosAlteravelDTO vendasDadosAlteravelDTO, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'vendasDadosAlteravelDTO' is set
        if (vendasDadosAlteravelDTO == null) {
            throw new ApiException("Missing the required parameter 'vendasDadosAlteravelDTO' when calling incluir(Async)");
        }
        

        okhttp3.Call localVarCall = incluirCall(vendasDadosAlteravelDTO, _callback);
        return localVarCall;

    }

    /**
     * 
     * Método utilizado para realizar inclusão de vendas
     * @param vendasDadosAlteravelDTO  (required)
     * @return VendasDTO
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public VendasDTO incluir(VendasDadosAlteravelDTO vendasDadosAlteravelDTO) throws ApiException {
        ApiResponse<VendasDTO> localVarResp = incluirWithHttpInfo(vendasDadosAlteravelDTO);
        return localVarResp.getData();
    }

    /**
     * 
     * Método utilizado para realizar inclusão de vendas
     * @param vendasDadosAlteravelDTO  (required)
     * @return ApiResponse&lt;VendasDTO&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<VendasDTO> incluirWithHttpInfo(VendasDadosAlteravelDTO vendasDadosAlteravelDTO) throws ApiException {
        okhttp3.Call localVarCall = incluirValidateBeforeCall(vendasDadosAlteravelDTO, null);
        Type localVarReturnType = new TypeToken<VendasDTO>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * Método utilizado para realizar inclusão de vendas
     * @param vendasDadosAlteravelDTO  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call incluirAsync(VendasDadosAlteravelDTO vendasDadosAlteravelDTO, final ApiCallback<VendasDTO> _callback) throws ApiException {

        okhttp3.Call localVarCall = incluirValidateBeforeCall(vendasDadosAlteravelDTO, _callback);
        Type localVarReturnType = new TypeToken<VendasDTO>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for listAll
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call listAllCall(final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/v1/vendas";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "*/*"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call listAllValidateBeforeCall(final ApiCallback _callback) throws ApiException {
        

        okhttp3.Call localVarCall = listAllCall(_callback);
        return localVarCall;

    }

    /**
     * 
     * Listagem geral de Vendas
     * @return List&lt;VendasListaDTO&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public List<VendasListaDTO> listAll() throws ApiException {
        ApiResponse<List<VendasListaDTO>> localVarResp = listAllWithHttpInfo();
        return localVarResp.getData();
    }

    /**
     * 
     * Listagem geral de Vendas
     * @return ApiResponse&lt;List&lt;VendasListaDTO&gt;&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<List<VendasListaDTO>> listAllWithHttpInfo() throws ApiException {
        okhttp3.Call localVarCall = listAllValidateBeforeCall(null);
        Type localVarReturnType = new TypeToken<List<VendasListaDTO>>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * Listagem geral de Vendas
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call listAllAsync(final ApiCallback<List<VendasListaDTO>> _callback) throws ApiException {

        okhttp3.Call localVarCall = listAllValidateBeforeCall(_callback);
        Type localVarReturnType = new TypeToken<List<VendasListaDTO>>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for localizarPorNomeCliente
     * @param nomeCliente  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call localizarPorNomeClienteCall(String nomeCliente, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/v1/vendas/cliente/{nomeCliente}"
            .replaceAll("\\{" + "nomeCliente" + "\\}", localVarApiClient.escapeString(nomeCliente.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "*/*"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call localizarPorNomeClienteValidateBeforeCall(String nomeCliente, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'nomeCliente' is set
        if (nomeCliente == null) {
            throw new ApiException("Missing the required parameter 'nomeCliente' when calling localizarPorNomeCliente(Async)");
        }
        

        okhttp3.Call localVarCall = localizarPorNomeClienteCall(nomeCliente, _callback);
        return localVarCall;

    }

    /**
     * 
     * Busca vendas pelo nome do cliente informado
     * @param nomeCliente  (required)
     * @return List&lt;VendasListaDTO&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public List<VendasListaDTO> localizarPorNomeCliente(String nomeCliente) throws ApiException {
        ApiResponse<List<VendasListaDTO>> localVarResp = localizarPorNomeClienteWithHttpInfo(nomeCliente);
        return localVarResp.getData();
    }

    /**
     * 
     * Busca vendas pelo nome do cliente informado
     * @param nomeCliente  (required)
     * @return ApiResponse&lt;List&lt;VendasListaDTO&gt;&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<List<VendasListaDTO>> localizarPorNomeClienteWithHttpInfo(String nomeCliente) throws ApiException {
        okhttp3.Call localVarCall = localizarPorNomeClienteValidateBeforeCall(nomeCliente, null);
        Type localVarReturnType = new TypeToken<List<VendasListaDTO>>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * Busca vendas pelo nome do cliente informado
     * @param nomeCliente  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call localizarPorNomeClienteAsync(String nomeCliente, final ApiCallback<List<VendasListaDTO>> _callback) throws ApiException {

        okhttp3.Call localVarCall = localizarPorNomeClienteValidateBeforeCall(nomeCliente, _callback);
        Type localVarReturnType = new TypeToken<List<VendasListaDTO>>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for obterPorId
     * @param id  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call obterPorIdCall(Long id, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/v1/vendas/{id}"
            .replaceAll("\\{" + "id" + "\\}", localVarApiClient.escapeString(id.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "*/*"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call obterPorIdValidateBeforeCall(Long id, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'id' is set
        if (id == null) {
            throw new ApiException("Missing the required parameter 'id' when calling obterPorId(Async)");
        }
        

        okhttp3.Call localVarCall = obterPorIdCall(id, _callback);
        return localVarCall;

    }

    /**
     * 
     * Obter venda pelo ID informado!
     * @param id  (required)
     * @return VendasDTO
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public VendasDTO obterPorId(Long id) throws ApiException {
        ApiResponse<VendasDTO> localVarResp = obterPorIdWithHttpInfo(id);
        return localVarResp.getData();
    }

    /**
     * 
     * Obter venda pelo ID informado!
     * @param id  (required)
     * @return ApiResponse&lt;VendasDTO&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<VendasDTO> obterPorIdWithHttpInfo(Long id) throws ApiException {
        okhttp3.Call localVarCall = obterPorIdValidateBeforeCall(id, null);
        Type localVarReturnType = new TypeToken<VendasDTO>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * Obter venda pelo ID informado!
     * @param id  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call obterPorIdAsync(Long id, final ApiCallback<VendasDTO> _callback) throws ApiException {

        okhttp3.Call localVarCall = obterPorIdValidateBeforeCall(id, _callback);
        Type localVarReturnType = new TypeToken<VendasDTO>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for remover
     * @param id  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call removerCall(Long id, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/v1/vendas/{id}"
            .replaceAll("\\{" + "id" + "\\}", localVarApiClient.escapeString(id.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "*/*"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "DELETE", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call removerValidateBeforeCall(Long id, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'id' is set
        if (id == null) {
            throw new ApiException("Missing the required parameter 'id' when calling remover(Async)");
        }
        

        okhttp3.Call localVarCall = removerCall(id, _callback);
        return localVarCall;

    }

    /**
     * 
     * Método utililzado para remover uma venda pelo ID
     * @param id  (required)
     * @return VendasDTO
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public VendasDTO remover(Long id) throws ApiException {
        ApiResponse<VendasDTO> localVarResp = removerWithHttpInfo(id);
        return localVarResp.getData();
    }

    /**
     * 
     * Método utililzado para remover uma venda pelo ID
     * @param id  (required)
     * @return ApiResponse&lt;VendasDTO&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<VendasDTO> removerWithHttpInfo(Long id) throws ApiException {
        okhttp3.Call localVarCall = removerValidateBeforeCall(id, null);
        Type localVarReturnType = new TypeToken<VendasDTO>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     *  (asynchronously)
     * Método utililzado para remover uma venda pelo ID
     * @param id  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> OK </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call removerAsync(Long id, final ApiCallback<VendasDTO> _callback) throws ApiException {

        okhttp3.Call localVarCall = removerValidateBeforeCall(id, _callback);
        Type localVarReturnType = new TypeToken<VendasDTO>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
