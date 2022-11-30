import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent  {

  persona = {
    genero: 'F', //Tenemos una propiedad persona con genero F
    notificaciones: true,
  }

  terminosYCondiciones: boolean = false;

}
