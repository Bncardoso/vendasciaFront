import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VendasDto } from '../../../api/models/vendas-dto';
import { VendasControllerService } from '../../../api/services/vendas-controller.service';

@Component({
  selector: 'app-list-vendas',
  templateUrl: './list-vendas.component.html',
  styleUrls: ['./list-vendas.component.scss']
})
export class ListVendasComponent implements OnInit {
  colunasMostrar = ['id', 'nomeCliente', 'contatoCliente', 'nomeProduto', 'qtdVenda', 'dataEncomenda', 'statusEncomenda', 'valorUnidade', 'valorTotal', 'acao'];
  vendasListaDataSource: MatTableDataSource<VendasDto> = new MatTableDataSource<VendasDto>([]);
  dadosCarregados: EventEmitter<void> = new EventEmitter<void>();

  constructor(public vendasService: VendasControllerService) {}

  ngOnInit(): void {
    this.buscarDados();
  }

  buscarDados() {
    this.vendasService.listAll().subscribe(data => {
      this.vendasListaDataSource.data = data;
      console.log(data);
      this.dadosCarregados.emit(); // Emitir evento quando os dados forem carregados
    });
  }
}
