import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Importaciones para validar y trabajar formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Ng prime 
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {InputSwitchModule} from 'primeng/inputswitch';
// import {MenuItem} from 'primeng/api'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AccordionModule ,
    InputSwitchModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
