import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from "./saludo/saludo.component";
import { ContadorComponent } from './contador/contador.component';
import { ListaComponent } from "./lista/lista.component";
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ListaComentariosComponent } from "./lista-comentarios/lista-comentarios.component";
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { TotalCompraComponent } from './total-compra/total-compra.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            SaludoComponent, 
            ContadorComponent, 
            ListaComponent, 
            TemporizadorComponent, 
            ComentariosComponent, 
            ListaComentariosComponent,
            TarjetaComponent,
            CalculadoraComponent,
            TotalCompraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeros_ejercicios_angular';
}
