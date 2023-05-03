import { Component, OnInit } from '@angular/core';

interface tarjeta{
  titulo: string;
subtitulos: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio1';
}

@Component({
selector:'app-root',
templateUrl'./app.component.html',
styleUrls [ './app.component.css' ]
})


export class AppcComponent implements OnInit {

  title= 'Mi primer app de angular'
  publicArregloTarjeta : tarjeta []  []; //variable de tipo arreglo


  ngOnInit(): void { //iniciar cuando se ejecuta la pagina
    this.ArregloTarjeta= [
      {titulo: 'Video 1, subtitulo: 'Subtitulo de Video'},
      {titulo: 'Video 2, subtitulo: 'Subtitulo de Video'},
      {titulo: 'Video 3, subtitulo: 'Subtitulo de Video'},
    ]
    
  }

}

import { Component, OnInit } from '@angular/core';

//Crear una interfaz
interface Tarjeta{
  titulo: string;
  subtitulo: string;
  num?: number;
}

export class AppComponent implements OnInit {

  title= 'Mi primer app en angular'
  public ArregloTarjeta : Tarjeta []= []; //variable de tipo arreglo

  ngOnInit(): void { // Es un metodo de tipo void que se inicializa cuando se ejecuta la pagina
    this.ArregloTarjeta= [ //cargamos datos al arreglo
    {titulo: 'Video 1, subtitulo: 'Subtitulo de Video', num: 1},
    {titulo: 'Video 2, subtitulo: 'Subtitulo de Video', num: 2},
    {titulo: 'Video 3, subtitulo: 'Subtitulo de Video', num: 3},
  ]
    
  }
}