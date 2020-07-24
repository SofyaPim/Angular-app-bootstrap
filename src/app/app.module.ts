import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {registerLocaleData} from '@angular/common'
import localeRu from '@angular/common/locales/ru'


import 'jquery';
import 'popper.js';
import  'bootstrap';
import { AppComponent } from './app.component';

import { FormComponent } from './form/form.component';

import { SliderComponent } from './slider/slider.component';
import { SmallcardComponent } from './smallcard/smallcard.component';
import { StickComponent } from './stick/stick.component';
 


registerLocaleData( localeRu, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    
    FormComponent,
  
    SliderComponent,
    SmallcardComponent,
    StickComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
     NgbAlertModule,
     FormsModule
     
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
