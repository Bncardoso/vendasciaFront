import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VendasControllerService} from "../../../api/services/vendas-controller.service";
import {VendasDto} from "../../../api/models/vendas-dto";
import {
  ConfirmationDialog,
  ConfirmationDialogResult
} from "../../../core/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-vendas',
  templateUrl: './form-vendas.component.html',
  styleUrls: ['./form-vendas.component.scss'],

})
export class FormVendasComponent {
  formGroup!: FormGroup;
  private readonly ACAO_INCLUIR = "Incluir";
  public readonly ACAO_EDITAR = "Editar";

  acao : string = this.ACAO_INCLUIR;
  id!:number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public vendasService: VendasControllerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.createForm();
    this.prepararEdicao();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      nomeCliente: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      contatoCliente: [null, Validators.required,],
      nomeProduto: [null, Validators.required],
      qtdVenda: [null, Validators.required],
      valorUnidade: [null, Validators.required],
      statusEncomenda: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      if (!this.id){
        this.realizarInclusao();
      }else{
        this.realizarEdicao();
      }
    }
  }

  private realizarInclusao() {
    console.log("Dados:", this.formGroup.value);
    this.vendasService.incluir({body: this.formGroup.value})
      .subscribe(retorno => {
        console.log("Retorno: ", retorno);
        this.confirmarAcao(this.ACAO_INCLUIR);
        this.router.navigate(["/vendas"]);
      }, erro => {
        console.log("Erro: " + erro);
        this.showMensagemSimples("Digita direito!");

      })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };

  confirmarAcao(acao:string) {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: ':D',
        mensagem: `Ação de ${acao} venda realizada com sucesso!`,
        textoBotoes: {
          ok: 'Sim',
        },
      },
    });
  }

  showMensagemSimples(mensagem: string, duracao: number = 2000) {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: duracao,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  private prepararEdicao() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId){
      const id = parseInt(paramId);
      console.log("id",paramId);
      this.vendasService.obterPorId({id: id}).subscribe(
        retorno => {
          this.acao = this.ACAO_EDITAR;
          console.log("retorno", retorno);
          this.id = retorno.id;
          this.formGroup.patchValue(retorno);
        }
      )
    }
  }

  private realizarEdicao() {
    console.log("Dados:", this.formGroup.value);
    this.vendasService.alterar({id: this.id, body: this.formGroup.value})
      .subscribe(retorno => {
        console.log("Retorno: ", retorno);
        this.confirmarAcao(this.ACAO_EDITAR);
        this.router.navigate(["/vendas"]);
      }, erro => {
        console.log("Erro: " + erro);
        this.showMensagemSimples("Digita direito!");

      })
  }
}
