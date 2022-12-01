import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {
  //implementamos el AsyncValidator. Como no usaremos promesa, la quitamos y solamente
  //manejaremos el observable

  constructor( private http: HttpClient ) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    
    const email = control.value;

    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
    //Con esto, retornamos un arreglo vacio si es que el mail no se encuentra o un 
    //arreglo con un objeto si es que si se encuentra
                .pipe(
                  map( resp => { //La respuesta va a ser un arreglo pero si este viene con algo, 
                    //entonces ya esta tomado, en cambio, si viene vacio, ese correo electronico esta disponible
                      return (resp.length === 0) ? null : { emailTomado: true }
                  })
                )

  }
  
}
