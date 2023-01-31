import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  num1 = 0; 
  num2 = 0;
  
  isChecked = true;
  isChecked2 = true;
  isChecked3 = true;
  isChecked4 = true;

  mostrar = false;
  boton(){
    this.mostrar = true;
  }

  limpiar(){
    this.mostrar = false;
    this.num1 = 0;
    this.num2 = 0;
  }

}
