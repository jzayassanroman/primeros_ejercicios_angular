import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  @Input() nombre: string = 'Laptop'; // Aqui añadimos el nombre del producto
  @Input() descripcion: string = 'Una laptop potente para trabajo y juego.'; // Aqui añadimos la descripcion del producto
  @Input() precio: number = 1200; // Aqui añadimos el precio del producto
}
