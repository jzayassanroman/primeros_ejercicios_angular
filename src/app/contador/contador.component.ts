import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  public hora: string ="";
  private id :any;
  public reloj : boolean = false;

  
  iniciar(): void {
    this.actualizar();
    this.id = setInterval(() => {
      this.actualizar();
    }, 1000); // Esta funcion sirve para que actualice cada segundo para mostrar la hora
  }

  actualizar():void{
    const horaactual = new Date();
    this.hora = horaactual.toLocaleTimeString(); // con esta funcion ayudamos a que se actualice la hora constantemente
  }

  pararReloj(): void {
    if (this.reloj) {
      clearInterval(this.id); 
    } else {
      this.iniciar(); 
    }
    this.reloj = !this.reloj; 
  } // con esta funcion paramos el reloj y al darle otra vez lo volvemos a iniciar
    
  ngOnDestroy():void{
    clearInterval(this.id);
  }

}
