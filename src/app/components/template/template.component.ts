import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['../../app.component.css']
})
export class TemplateComponent implements OnInit {

  usuario: Usuario = {
    nombre: null,
    apellido: null,
    correo: null,
  };

  constructor() { }

  ngOnInit() {
  }

   guardar(forma: NgForm) {
     console.log("Se ha enviado el formulario");
     console.log(forma);
     console.log(forma.value);
    
  }

}
