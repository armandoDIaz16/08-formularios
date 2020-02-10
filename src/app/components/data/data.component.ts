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
        ])
    });

  }

  ngOnInit() {
  }

// validaciones personalizadas


  agregarItem(){
(<FormArray> this.forma.controls['pasatiempos']).push(
    new FormControl('',Validators.required)
) 
  }

  enviarData() {
console.log(this.forma.value);
this.forma.setValue( this.usuario );
// this.forma.reset(this.usuario);
  }
}
