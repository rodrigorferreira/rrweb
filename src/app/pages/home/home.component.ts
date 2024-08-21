import { Component, OnInit } from '@angular/core';

declare var $: any; // Adicione esta linha se você estiver utilizando jQuery no projeto

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Código para movimentar o slide automaticamente
    $('.carousel').carousel({
      interval: 2000
    });
  }

}
