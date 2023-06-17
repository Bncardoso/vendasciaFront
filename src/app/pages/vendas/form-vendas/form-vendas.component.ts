import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-vendas',
  templateUrl: './form-vendas.component.html',
  styleUrls: ['./form-vendas.component.scss'],

})
export class FormVendasComponent {
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      nomeCliente: [null, Validators.required, Validators.minLength(3),Validators.maxLength(15)],
      contatoCliente: [null, Validators.required, ],
      nomeProduto: [null, Validators.required],
      qtdVenda: [null , Validators.required],
      valorUnidade: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log("Dados:")
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };
}
