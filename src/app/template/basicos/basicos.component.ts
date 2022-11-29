import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario !: NgForm;
  
  constructor() { }

  ngOnInit(): void {
  }

  /* guardar( miFormulario: NgForm) {
    console.log(miFormulario);
  } */

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched
    //Si no colocamos el miFormulario?., lo que pasa es que nos muestra un error de que no puede leer la propiedad "controls" de undefined, esto sucede porque el formulario se ejecuta al principio como undefined hasta que yo ingreso a el. Entonces, al colocar .? le digo que si tenemos miFormulario, entonces que siga evaluando con .controls, sino, no.
  }

  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.value<=0 && this.miFormulario?.controls['producto']?.touched
    //Muestro el mensaje cuando el precio sea menor a 0, por eso es que escribo value<=0
  }



  guardar() {
    console.log(this.miFormulario);
  }

}
