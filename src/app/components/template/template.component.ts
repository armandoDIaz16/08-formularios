import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHdd } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['../../app.component.css']
})
export class TemplateComponent implements OnInit {

  // icons the fontAwesome
  faCoffee = faCoffee;
  deleteIcon = faTrashAlt;
  faHdd = faHdd;
  usuario: Usuario = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: '',
    acepta_terminos: false
  };

  paises = [{
    clave: 'mxn',
    nombre: 'México'
  },
  {
    clave: 'usa',
    nombre: 'Estados Unidos'
  }];


  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    // console.log("Se ha enviado el formulario");
    console.log(forma);
    console.log(forma.value);

  }

}
