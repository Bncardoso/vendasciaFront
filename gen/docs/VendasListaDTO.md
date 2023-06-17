

# VendasListaDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Long** |  |  [optional]
**dataEncomenda** | **LocalDate** |  |  [optional]
**nomeProduto** | **String** |  |  [optional]
**qtdVenda** | **Integer** |  |  [optional]
**valorUnidade** | **Double** |  |  [optional]
**valorTotal** | **Double** |  |  [optional]
**nomeCliente** | **String** |  |  [optional]
**contatoCliente** | **Long** |  |  [optional]
**statusEncomenda** | [**StatusEncomendaEnum**](#StatusEncomendaEnum) |  |  [optional]



## Enum: StatusEncomendaEnum

Name | Value
---- | -----
FINALIZADO | &quot;FINALIZADO&quot;
ENTREGUE | &quot;ENTREGUE&quot;
PENDENTE | &quot;PENDENTE&quot;



