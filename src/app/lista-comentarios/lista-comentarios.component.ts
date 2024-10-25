import { Component } from '@angular/core';
import { ComentariosComponent } from '../comentarios/comentarios.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-comentarios',
  standalone: true,
  imports: [ComentariosComponent,FormsModule,CommonModule],
  templateUrl: './lista-comentarios.component.html',
  styleUrl: './lista-comentarios.component.css'
})
export class ListaComentariosComponent {
  public comentarios: string[] = []; // aqui almacenamos los comentarios en una lista

  agregarComentario(nuevoComentario: string) { // en este metodo añadimos a la lista el comentario que nos llega desde el componente hijo (comentarios)
    this.comentarios.push(nuevoComentario);
  }

}
