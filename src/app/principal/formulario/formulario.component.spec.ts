import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormularioComponent } from './formulario.component';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComponent ],
      imports: [FormsModule,  ReactiveFormsModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  //Probando evento click de button btnEnviar
  it('Testing de testSuma TRUE',()=>{
    // Pasando valores a los atributos user y pwd
    component.num1 = 10;
    component.num2 = 10;
    

    // Detectar el evento click del boton btnEnviar
    const btnEnviar = fixture.debugElement.query(By.css('#btnEnviar'));
    btnEnviar.nativeElement.click();

    // Prueba
    expect(component.num1 + component.num2).toEqual(20);
  });


});
