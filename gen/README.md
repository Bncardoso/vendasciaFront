# openapi-java-client

Sistema de Gerenciamento de Vendas
- API version: v1
  - Build date: 2023-06-15T00:44:51.135947300-03:00[America/Sao_Paulo]

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)


*Automatically generated by the [OpenAPI Generator](https://openapi-generator.tech)*


## Requirements

Building the API client library requires:
1. Java 1.7+
2. Maven/Gradle

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn clean install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn clean deploy
```

Refer to the [OSSRH Guide](http://central.sonatype.org/pages/ossrh-guide.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>org.openapitools</groupId>
  <artifactId>openapi-java-client</artifactId>
  <version>v1</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "org.openapitools:openapi-java-client:v1"
```

### Others

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

* `target/openapi-java-client-v1.jar`
* `target/lib/*.jar`

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

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

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8080*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*VendasControllerApi* | [**alterar**](docs/VendasControllerApi.md#alterar) | **PUT** /v1/vendas/{id} | 
*VendasControllerApi* | [**incluir**](docs/VendasControllerApi.md#incluir) | **POST** /v1/vendas | 
*VendasControllerApi* | [**listAll**](docs/VendasControllerApi.md#listAll) | **GET** /v1/vendas | 
*VendasControllerApi* | [**localizarPorNomeCliente**](docs/VendasControllerApi.md#localizarPorNomeCliente) | **GET** /v1/vendas/cliente/{nomeCliente} | 
*VendasControllerApi* | [**obterPorId**](docs/VendasControllerApi.md#obterPorId) | **GET** /v1/vendas/{id} | 
*VendasControllerApi* | [**remover**](docs/VendasControllerApi.md#remover) | **DELETE** /v1/vendas/{id} | 


## Documentation for Models

 - [VendasDTO](docs/VendasDTO.md)
 - [VendasDadosAlteravelDTO](docs/VendasDadosAlteravelDTO.md)
 - [VendasListaDTO](docs/VendasListaDTO.md)


## Documentation for Authorization

Authentication schemes defined for the API:
### basicScheme

- **Type**: HTTP basic authentication


## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author



