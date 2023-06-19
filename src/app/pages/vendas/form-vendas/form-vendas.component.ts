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
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-vendas',
  templateUrl: './form-vendas.component.html',
  styleUrls: ['./form-vendas.component.scss'],

})
export class FormVendasComponent {
  formGroup!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public vendasService: VendasControllerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      nomeCliente: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      contatoCliente: [null, Validators.required,],
      nomeProduto: [null, Validators.required],
      qtdVenda: [null, Validators.required],
      valorUnidade: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log("Dados:", this.formGroup.value);
      this.vendasService.incluir({body: this.formGroup.value})
        .subscribe(retorno => {
          console.log("Retorno: ", retorno);
          this.confirmarIncluir();
          this.router.navigate(["/vendas"]);
        }, erro => {
          console.log("Erro: " + erro);
          this.showMensagemSimples("Digita direito!");

        })
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };

  confirmarIncluir() {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: {
        titulo: ':D',
        mensagem: `Inclusão de venda realizada com sucesso!`,
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
}
