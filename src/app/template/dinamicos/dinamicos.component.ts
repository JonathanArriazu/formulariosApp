import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario !: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['nombre']?.invalid && this.miFormulario?.controls['nombre']?.touched
  }
  
  guardar() {
    console.log('Hola');
  }

}
