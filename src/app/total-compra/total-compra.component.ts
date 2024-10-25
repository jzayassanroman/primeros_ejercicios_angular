import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Articulo { // esto sirve para definir la estructura del objeto, pj --> nombre siempre es string 
  nombre: string;
  precio: number;
  cantidad: number;
}
@Component({
  selector: 'app-total-compra',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './total-compra.component.html',
  styleUrl: './total-compra.component.css'
})
export class TotalCompraComponent {
  public articulos: Articulo[] = [ // esto es una lista de articulos, la cantidad inicial es 0 
    { nombre: 'Camiseta', precio: 5.1, cantidad: 0 },
    { nombre: 'Pantalones', precio: 6.5, cantidad: 0 },
    { nombre: 'Camisa', precio: 10.0, cantidad: 0 },
    { nombre: 'Zapatos', precio: 15.0, cantidad: 0 },
  ];

  aumentarCantidad(articulo: Articulo): void { // metodo para aumentar la cantidad del producto
    articulo.cantidad++;
  }

  disminuirCantidad(articulo: Articulo): void { // metodo para disminuir la cantidad del producto 
    if (articulo.cantidad > 0) {
      articulo.cantidad--;
    }
  }

  totalArticulo(articulo: Articulo): number { // este metodo calcula el total de la cantidad de articulos 
    return articulo.precio * articulo.cantidad;
  }

  totalCompra(): number { // este metodo calcula el total de la compra
    return this.articulos.reduce((total, articulo) => total + this.totalArticulo(articulo), 0);
  }
}
