import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
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


  constructor() {
    this.forma = new FormGroup({
      // 'nombre' : new FormControl(valor por defecto, regla de valudacion o relgas en [], reglas async)
      nombre : new FormControl('', Validators.required),
      apellido : new FormControl('', Validators.required),
      correo : new FormControl('', [Validators.email, Validators.required])
    });

  }

  ngOnInit() {
  }

  enviarData() {
console.log(this.forma);
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<fa-icon [icon]="faHdd"></fa-icon> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    })
  }
}
