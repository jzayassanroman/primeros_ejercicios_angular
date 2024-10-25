import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.css'
})
export class TemporizadorComponent {
  public tiempo: number = 0; // Aqui se guarda el tiempo que añade el usuario
  public tiempoRestante: number = 0; // Aqui se guarda el tiempo restante de la cuenta atras
  private intervalId: any; // ID del intervalo
  public isRunning: boolean = false; // aqui vemos si el temporizador esta activo o no

  iniciarTemporizador() {
    if (this.tiempo <= 0) {
      alert('Por favor, ingresa un tiempo en segundos.');
      return;
    } // aqui le pedimos al usuario que nos añada un tiempo mayor o igual que 0

    this.tiempoRestante = this.tiempo; // aqui igualamos el tiempo restante con el tiempo añadido por el usuario para empezar la cuenta atras
    this.isRunning = true; // aqui definimos que el temporizador esta activo

    this.intervalId = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--; // aqui vamos disminuyendo el tiempo que queda hasta llegar a 0
      } else {
        clearInterval(this.intervalId); // aqui paramos el temprizador al llegar a 0
        this.isRunning = false; // cuando llega a  definimos que el temporizador no esta activo
      }
    }, 1000);
  }

  detenerTemporizador() {
    clearInterval(this.intervalId);
    this.isRunning = false; // definimos que el temporizador esta inactivo 
  } // metodo para parar el temporizador  
}
