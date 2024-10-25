import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public tareas: string[] = []; // --> Lista donde se almacenan las tareas 
  public nuevaTarea: string = ''; // --> Aqui se almacena la nueva tarea

  agregarTarea(): void {
    if (this.nuevaTarea.trim()) { // --> Comprobamos que tenemos una tarea (.trim para eliminar espacios)
      this.tareas.push(this.nuevaTarea.trim()); // --> agrega la tarea a la lista 
      this.nuevaTarea = ''; // --> limpia el campo
    }
  }
}
