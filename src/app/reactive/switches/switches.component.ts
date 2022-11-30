import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    terminos: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    
    this.miFormulario.reset( {
      ...this.persona,
      terminos: false
    } );
    //usamos reset, ya que en miFormulario tenemos terminos y en persona no, entonces
    //si usamos setValue en lugar de reset, marcaria error.

    this.miFormulario.valueChanges.subscribe( ({condiciones, ...rest}) => {
      /* delete form.condiciones; */
      this.persona = rest;
    })
  }

  guardar() {
    const formValue = {...this.miFormulario.value}
    delete formValue.condiciones;
    
    this.persona = formValue;
  }

}
