import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VendasControllerService} from "../../../api/services/vendas-controller.service";
import {VendasDto} from "../../../api/models/vendas-dto";
@Component({
  selector: 'app-form-vendas',
  templateUrl: './form-vendas.component.html',
  styleUrls: ['./form-vendas.component.scss'],

})
export class FormVendasComponent {
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public vendasService: VendasControllerService
  ) {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      nomeCliente: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      contatoCliente: [null, Validators.required,],
      nomeProduto: [null, Validators.required],
      qtdVenda: [null, Validators.required],
      valorUnidade: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log("Dados:", this.formGroup.value);
      this.vendasService.incluir({body: this.formGroup.value})
        .subscribe(retorno =>{
          console.log("Retorno: ",retorno);
          alert("Inclusão da vendano realizada com sucesso"+retorno);

      }, erro =>{
        console.log("Erro: "+erro);
        alert("Erro ao incluir")

      })
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };
}
