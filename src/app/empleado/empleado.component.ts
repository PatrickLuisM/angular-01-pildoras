import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  nombre = 'Patrick';
  apellido = ' Luis';
  edad = 26;
  empresa = 'Facebook';

  // agregarEmpresa(event: Event) {
  //   this.empresa = (<HTMLInputElement>event.target).value;
  // }

  habilitarInput = false;

  check = true;

  textoRegistro = 'No hay nadie registrado';

  setUsuarioRegistrado(event: Event) {
    //

    if ((<HTMLInputElement>event.target).value === 'si') {
      this.textoRegistro = 'Usuario Registrado';
    } else {
      this.textoRegistro = 'Usuario No Registrado';
    }
  }

  constructor() {}

  ngOnInit() {}
}
