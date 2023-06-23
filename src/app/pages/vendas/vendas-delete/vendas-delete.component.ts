import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {VendasDto} from '../../../api/models/vendas-dto';
import {VendasControllerService} from '../../../api/services/vendas-controller.service';
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {
  ConfirmationDialog,
  ConfirmationDialogResult
} from "../../../core/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-vendas-delete',
  templateUrl: './vendas-delete.component.html',
  styleUrls: ['./vendas-delete.component.scss']
})
export class VendasDeleteComponent {
  colunasMostrar = ['selecionado', 'id', 'nomeCliente', 'contatoCliente', 'nomeProduto', 'qtdVenda', 'dataEncomenda', 'statusEncomenda', 'valorUnidade', 'valorTotal'];
  vendasListaDataSource: MatTableDataSource<VendasDto> = new MatTableDataSource<VendasDto>([]);
  idsSelecionados: number[] = [];

  constructor(
    public vendasService: VendasControllerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.buscarDados();
  }

  private buscarDados() {
    this.vendasService.listAll().subscribe(data => {
      this.vendasListaDataSource.data = data;
    });
  }

  selecionarTodos(event: any) {
    const selecionar = event.checked;
    this.vendasListaDataSource.data.forEach((item: any) => {
      item.selecionado = selecionar;
      this.atualizarIdsSelecionados(item);
    });
  }

  selecionarLinha(event: any, item: any) {
    item.selecionado = event.checked;
    this.atualizarIdsSelecionados(item);
  }

  atualizarIdsSelecionados(item: any) {
    const index = this.idsSelecionados.indexOf(item.id);
    if (item.selecionado && index === -1) {
      this.idsSelecionados.push(item.id);
    } else if (!item.selecionado && index !== -1) {
      this.idsSelecionados.splice(index, 1);
    }
  }

  excluirItensSelecionados() {
    if (this.idsSelecionados.length === 0) {
      this.showMensagemSimples('Nenhum item selecionado.');
      return;
    }

    for (let i = 0; i < this.idsSelecionados.length; i++) {
      const id = this.idsSelecionados[i];
      this.remover(id);
    }

    // Limpar a lista de IDs selecionados após a exclusão
    this.idsSelecionados = [];
  }

  remover(id: number) {
    this.vendasService.remover({id}).subscribe(
      (response) => {
        this.showMensagemSimples('Item excluído com sucesso!');
        this.buscarDados();
      },
    (error) => {

        if (error.status === 404) {
          this.showMensagemSimples('Venda inexistente', error);
        } else {
          this.showMensagemSimples('Erro ao excluir o item:', error);
          console.log("Erro:",error);
        }
      }
    );
  }

  confirmarExcluir() {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: 'Atenção',
        mensagem: `Confirmar a exclusão dos itens?(${this.idsSelecionados})`,
        textoBotoes: {
          ok: 'Sim',
          cancel: 'Cancelar',
        },
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: ConfirmationDialogResult) => {
      if (confirmed?.resultado) {
        this.excluirItensSelecionados();
      }
    });
  }

  showMensagemSimples(mensagem: string, duracao: number = 2000) {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: duracao,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
