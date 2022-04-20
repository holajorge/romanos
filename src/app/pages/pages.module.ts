import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { PagesRoutingModule } from './pages-routing.module';
import { NumerosComponent } from './numeros/numeros.component';


@NgModule({
  declarations: [NumerosComponent],
  imports: [
    CommonModule,BrowserModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  exports: [
    NumerosComponent
  ]
})
export class PagesModule { }
