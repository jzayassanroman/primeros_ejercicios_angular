import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  public numero1: number = 0;  // aqui añadimos el primer numero
  public numero2: number = 0;  // aqui añadimos el segundo numero
  public resultado: number = 0;  // aqui nos da el resultado

  sumar(): void { // este metodo sirve para sumar 
    this.resultado = this.numero1 + this.numero2;
  }
  restar(): void { // este metodo sirve para restar
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar(): void { // este metodo sirve para multiplicar 
    this.resultado = this.numero1 * this.numero2;
  }

  dividir(): void { // este metodo sirve para dividir 
    if (this.numero2 !== 0) {
      this.resultado = this.numero1 / this.numero2;
    } else {
      alert('No se puede dividir entre cero');
    }
  }
  raizCuadrada(): void { // este metodo sirve para hacer la raiz cuadrada del primer numero 
    this.resultado = Math.sqrt(this.numero1);
  }

}
