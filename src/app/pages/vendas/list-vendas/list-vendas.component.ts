import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {VendasDto} from "../../../api/models/vendas-dto";
import {VendasControllerService} from "../../../api/services/vendas-controller.service";

@Component({
  selector: 'app-list-vendas',
  templateUrl: './list-vendas.component.html',
  styleUrls: ['./list-vendas.component.scss']
})
export class ListVendasComponent implements OnInit{
  colunasMostrar = ['id','nomeCliente','contatoCliente','nomeProduto','qtdVenda','dataEncomenda', 'statusEncomenda','valorUnidade','valorTotal','acao']
  vendasListaDataSource : MatTableDataSource<VendasDto> = new MatTableDataSource<VendasDto>([]);

  constructor(
    public vendasService: VendasControllerService,
    // private dialog: MatDialog,
    // private snackBar: MatSnackBar
  ) {
  }
  ngOnInit(): void {
      this.buscarDados();
    }

  private buscarDados() {
    this.vendasService.listAll().subscribe(data => {
      this.vendasListaDataSource.data = data;
      console.log(data);
    })
  }
}
