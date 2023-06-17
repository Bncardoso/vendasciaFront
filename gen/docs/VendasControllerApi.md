# VendasControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterar**](VendasControllerApi.md#alterar) | **PUT** /v1/vendas/{id} | 
[**incluir**](VendasControllerApi.md#incluir) | **POST** /v1/vendas | 
[**listAll**](VendasControllerApi.md#listAll) | **GET** /v1/vendas | 
[**localizarPorNomeCliente**](VendasControllerApi.md#localizarPorNomeCliente) | **GET** /v1/vendas/cliente/{nomeCliente} | 
[**obterPorId**](VendasControllerApi.md#obterPorId) | **GET** /v1/vendas/{id} | 
[**remover**](VendasControllerApi.md#remover) | **DELETE** /v1/vendas/{id} | 


<a name="alterar"></a>
# **alterar**
> VendasDTO alterar(id, vendasDadosAlteravelDTO)



Metodo utilizado para alterar dados de uma venda

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.VendasControllerApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8080");

    VendasControllerApi apiInstance = new VendasControllerApi(defaultClient);
    Long id = 56L; // Long | 
    VendasDadosAlteravelDTO vendasDadosAlteravelDTO = new VendasDadosAlteravelDTO(); // VendasDadosAlteravelDTO | 
    try {
      VendasDTO result = apiInstance.alterar(id, vendasDadosAlteravelDTO);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling VendasControllerApi#alterar");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Long**|  |
 **vendasDadosAlteravelDTO** | [**VendasDadosAlteravelDTO**](VendasDadosAlteravelDTO.md)|  |

### Return type

[**VendasDTO**](VendasDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="incluir"></a>
# **incluir**
> VendasDTO incluir(vendasDadosAlteravelDTO)



Método utilizado para realizar inclusão de vendas

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.VendasControllerApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8080");

    VendasControllerApi apiInstance = new VendasControllerApi(defaultClient);
    VendasDadosAlteravelDTO vendasDadosAlteravelDTO = new VendasDadosAlteravelDTO(); // VendasDadosAlteravelDTO | 
    try {
      VendasDTO result = apiInstance.incluir(vendasDadosAlteravelDTO);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling VendasControllerApi#incluir");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendasDadosAlteravelDTO** | [**VendasDadosAlteravelDTO**](VendasDadosAlteravelDTO.md)|  |

### Return type

[**VendasDTO**](VendasDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="listAll"></a>
# **listAll**
> List&lt;VendasListaDTO&gt; listAll()



Listagem geral de Vendas

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.VendasControllerApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8080");

    VendasControllerApi apiInstance = new VendasControllerApi(defaultClient);
    try {
      List<VendasListaDTO> result = apiInstance.listAll();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling VendasControllerApi#listAll");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;VendasListaDTO&gt;**](VendasListaDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="localizarPorNomeCliente"></a>
# **localizarPorNomeCliente**
> List&lt;VendasListaDTO&gt; localizarPorNomeCliente(nomeCliente)



Busca vendas pelo nome do cliente informado

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.VendasControllerApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8080");

    VendasControllerApi apiInstance = new VendasControllerApi(defaultClient);
    String nomeCliente = "nomeCliente_example"; // String | 
    try {
      List<VendasListaDTO> result = apiInstance.localizarPorNomeCliente(nomeCliente);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling VendasControllerApi#localizarPorNomeCliente");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nomeCliente** | **String**|  |

### Return type

[**List&lt;VendasListaDTO&gt;**](VendasListaDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="obterPorId"></a>
# **obterPorId**
> VendasDTO obterPorId(id)



Obter venda pelo ID informado!

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.VendasControllerApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8080");

    VendasControllerApi apiInstance = new VendasControllerApi(defaultClient);
    Long id = 56L; // Long | 
    try {
      VendasDTO result = apiInstance.obterPorId(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling VendasControllerApi#obterPorId");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Long**|  |

### Return type

[**VendasDTO**](VendasDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="remover"></a>
# **remover**
> VendasDTO remover(id)



Método utililzado para remover uma venda pelo ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.VendasControllerApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:8080");

    VendasControllerApi apiInstance = new VendasControllerApi(defaultClient);
    Long id = 56L; // Long | 
    try {
      VendasDTO result = apiInstance.remover(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling VendasControllerApi#remover");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Long**|  |

### Return type

[**VendasDTO**](VendasDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

