import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([//Indico otro fb.array para inicializar 
    //un array, ya que si lo coloco como [] con esto estaria directamente aplicando un nuevo campo
    //El colocar [] es igual a que coloque this.fb.control()
    ['Metal Gear'],
    ['Death Stranding']
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoEsValido(campo: string) {
    return this.miFormulario.controls?.[campo]?.errors 
            && this.miFormulario.controls?.[campo]?.touched
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset();

  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  eliminar(index: number) {
    this.favoritosArr.removeAt(index);
  }

}
