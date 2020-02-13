import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import Swal from 'sweetalert2';
import { faHdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;
  faHdd = faHdd;
  estado:boolean;

  usuario :object = {
    nombre : '',
    apellido : '',
    correo : '',
    pasatiempos: ['']
  }


  constructor() {
    this.forma = new FormGroup({
      // 'nombre' : new FormControl(valor por defecto, regla de valudacion o relgas en [], reglas async)
      nombre : new FormControl('', Validators.required),
      apellido : new FormControl('', Validators.required),
      correo : new FormControl('', [Validators.email, Validators.required]),
      pasatiempos: new FormArray([
         new FormControl('' , Validators.required)
        ]),
      password1: new FormControl('', Validators.required),
      password2: new FormControl('', [ Validators.required , this.validaContrasenias.bind(this.forma)])
    });

  }

  ngOnInit() {
  }

// validaciones personalizadas
// entre parentesis se explica el tipo a recibir y con : {} el tipo a devolver
validaContrasenias(control: FormControl)
// : {[s: string]: boolean } 
: any
{
  // console.log(control.value);
  // console.log(this.controls);
  // console.log(this.forma.controls['password1'].value);

//   if ( control.value !== this.forma.controls['password1'].value ) {
// return {error : true} // si retorna string.boolean es porque si hubo error
//   }
//   return null; // si retorna null es porque no hubo ningun error
}

  agregarItem(){
(<FormArray> this.forma.controls['pasatiempos']).push(
    new FormControl('',Validators.required)
);
  }

  enviarData() {
console.log(this.forma.value);
console.log(this.forma);
// this.forma.setValue( this.usuario );
// this.forma.reset(this.usuario);
  }
}
