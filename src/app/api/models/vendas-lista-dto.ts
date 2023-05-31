/* tslint:disable */
/* eslint-disable */
export interface VendasListaDto {
  contatoCliente?: number;
  dataEncomenda?: string;
  id?: number;
  nomeCliente?: string;
  nomeProduto?: string;
  qtdVenda?: number;
  statusEncomenda?: 'FINALIZADO' | 'ENTREGUE' | 'PENDENTE';
  valorTotal?: number;
  valorUnidade?: number;
}
