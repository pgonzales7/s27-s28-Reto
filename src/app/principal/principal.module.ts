import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,

    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule
    
    
  ],
  exports: [
    FormularioComponent,
    MatSlideToggleModule,
    MatFormFieldModule
    

  ]
})
export class PrincipalModule { }
