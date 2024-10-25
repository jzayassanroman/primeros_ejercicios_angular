import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  public nuevoComentario: string = ''; // aqui almacenamos el comentario 

  @Output() comentarioEnviado: EventEmitter<string> = new EventEmitter(); // output sirve para enviar una notificacion al componente padre
  
  enviarComentario() { // con este metodo enviamos el comentario 
    if (this.nuevoComentario.trim()) {
      this.comentarioEnviado.emit(this.nuevoComentario); // enviamos el comentario al componente padre
      this.nuevoComentario = ''; // limpiamos el campo 
    } else {
      alert('El comentario no puede estar vacío');
    }
  }

}

