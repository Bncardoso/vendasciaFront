import {Component, OnInit} from '@angular/core';
import {VendasDto} from "../../api/models/vendas-dto";
import {VendasControllerService} from "../../api/services/vendas-controller.service";

@Component({
  selector: 'app-lista-vendas',
  templateUrl: './lista-vendas.component.html',
  styleUrls: ['./lista-vendas.component.css']
})
export class ListaVendasComponent implements OnInit {
   titulo  = "Titulo de teste";
   vendasDtos : VendasDto[] = [
     {id: 10, nomeCliente: 'macarena', nomeProduto: 'pano de prato',qtdVenda:5, valorUnidade:45},
     {id: 11, nomeCliente: 'macarena2', nomeProduto: 'pano de prato',qtdVenda:5, valorUnidade:45}
   ];
  displayedColumns: string[] = ['id','nomeCliente','contatoCliente', 'produto', 'qtdVenda','valorUnidade', 'valorTotal', 'dataEncomenda'];
   constructor(
     private vendasControllerService : VendasControllerService) {
   }
  ngOnInit(): void {
    console.log("Teste", this);
    this.vendasControllerService.listAll().subscribe(
      (reponse) => {
      console.log("response: ",reponse);
      //this.vendasDtos = reponse;
      }
    )
    console.log("depois", this);
  }

}
