/* tslint:disable */
/* eslint-disable */
export interface VendasDadosAlteravelDto {
  contatoCliente?: number;
  nomeCliente?: string;
  nomeProduto?: string;
  qtdVenda?: number;
  statusEncomenda?: 'FINALIZADO' | 'ENTREGUE' | 'PENDENTE';
  valorUnidade?: number;
}
