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


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * VendasDadosAlteravelDTO
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-06-15T00:44:51.135947300-03:00[America/Sao_Paulo]")
public class VendasDadosAlteravelDTO {
  public static final String SERIALIZED_NAME_NOME_PRODUTO = "nomeProduto";
  @SerializedName(SERIALIZED_NAME_NOME_PRODUTO)
  private String nomeProduto;

  public static final String SERIALIZED_NAME_QTD_VENDA = "qtdVenda";
  @SerializedName(SERIALIZED_NAME_QTD_VENDA)
  private Integer qtdVenda;

  public static final String SERIALIZED_NAME_VALOR_UNIDADE = "valorUnidade";
  @SerializedName(SERIALIZED_NAME_VALOR_UNIDADE)
  private Double valorUnidade;

  public static final String SERIALIZED_NAME_NOME_CLIENTE = "nomeCliente";
  @SerializedName(SERIALIZED_NAME_NOME_CLIENTE)
  private String nomeCliente;

  public static final String SERIALIZED_NAME_CONTATO_CLIENTE = "contatoCliente";
  @SerializedName(SERIALIZED_NAME_CONTATO_CLIENTE)
  private Long contatoCliente;

  /**
   * Gets or Sets statusEncomenda
   */
  @JsonAdapter(StatusEncomendaEnum.Adapter.class)
  public enum StatusEncomendaEnum {
    FINALIZADO("FINALIZADO"),
    
    ENTREGUE("ENTREGUE"),
    
    PENDENTE("PENDENTE");

    private String value;

    StatusEncomendaEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static StatusEncomendaEnum fromValue(String value) {
      for (StatusEncomendaEnum b : StatusEncomendaEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<StatusEncomendaEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final StatusEncomendaEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public StatusEncomendaEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return StatusEncomendaEnum.fromValue(value);
      }
    }
  }

  public static final String SERIALIZED_NAME_STATUS_ENCOMENDA = "statusEncomenda";
  @SerializedName(SERIALIZED_NAME_STATUS_ENCOMENDA)
  private StatusEncomendaEnum statusEncomenda;


  public VendasDadosAlteravelDTO nomeProduto(String nomeProduto) {
    
    this.nomeProduto = nomeProduto;
    return this;
  }

   /**
   * Get nomeProduto
   * @return nomeProduto
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getNomeProduto() {
    return nomeProduto;
  }


  public void setNomeProduto(String nomeProduto) {
    this.nomeProduto = nomeProduto;
  }


  public VendasDadosAlteravelDTO qtdVenda(Integer qtdVenda) {
    
    this.qtdVenda = qtdVenda;
    return this;
  }

   /**
   * Get qtdVenda
   * @return qtdVenda
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getQtdVenda() {
    return qtdVenda;
  }


  public void setQtdVenda(Integer qtdVenda) {
    this.qtdVenda = qtdVenda;
  }


  public VendasDadosAlteravelDTO valorUnidade(Double valorUnidade) {
    
    this.valorUnidade = valorUnidade;
    return this;
  }

   /**
   * Get valorUnidade
   * @return valorUnidade
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Double getValorUnidade() {
    return valorUnidade;
  }


  public void setValorUnidade(Double valorUnidade) {
    this.valorUnidade = valorUnidade;
  }


  public VendasDadosAlteravelDTO nomeCliente(String nomeCliente) {
    
    this.nomeCliente = nomeCliente;
    return this;
  }

   /**
   * Get nomeCliente
   * @return nomeCliente
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getNomeCliente() {
    return nomeCliente;
  }


  public void setNomeCliente(String nomeCliente) {
    this.nomeCliente = nomeCliente;
  }


  public VendasDadosAlteravelDTO contatoCliente(Long contatoCliente) {
    
    this.contatoCliente = contatoCliente;
    return this;
  }

   /**
   * Get contatoCliente
   * @return contatoCliente
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Long getContatoCliente() {
    return contatoCliente;
  }


  public void setContatoCliente(Long contatoCliente) {
    this.contatoCliente = contatoCliente;
  }


  public VendasDadosAlteravelDTO statusEncomenda(StatusEncomendaEnum statusEncomenda) {
    
    this.statusEncomenda = statusEncomenda;
    return this;
  }

   /**
   * Get statusEncomenda
   * @return statusEncomenda
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public StatusEncomendaEnum getStatusEncomenda() {
    return statusEncomenda;
  }


  public void setStatusEncomenda(StatusEncomendaEnum statusEncomenda) {
    this.statusEncomenda = statusEncomenda;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    VendasDadosAlteravelDTO vendasDadosAlteravelDTO = (VendasDadosAlteravelDTO) o;
    return Objects.equals(this.nomeProduto, vendasDadosAlteravelDTO.nomeProduto) &&
        Objects.equals(this.qtdVenda, vendasDadosAlteravelDTO.qtdVenda) &&
        Objects.equals(this.valorUnidade, vendasDadosAlteravelDTO.valorUnidade) &&
        Objects.equals(this.nomeCliente, vendasDadosAlteravelDTO.nomeCliente) &&
        Objects.equals(this.contatoCliente, vendasDadosAlteravelDTO.contatoCliente) &&
        Objects.equals(this.statusEncomenda, vendasDadosAlteravelDTO.statusEncomenda);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nomeProduto, qtdVenda, valorUnidade, nomeCliente, contatoCliente, statusEncomenda);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class VendasDadosAlteravelDTO {\n");
    sb.append("    nomeProduto: ").append(toIndentedString(nomeProduto)).append("\n");
    sb.append("    qtdVenda: ").append(toIndentedString(qtdVenda)).append("\n");
    sb.append("    valorUnidade: ").append(toIndentedString(valorUnidade)).append("\n");
    sb.append("    nomeCliente: ").append(toIndentedString(nomeCliente)).append("\n");
    sb.append("    contatoCliente: ").append(toIndentedString(contatoCliente)).append("\n");
    sb.append("    statusEncomenda: ").append(toIndentedString(statusEncomenda)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

