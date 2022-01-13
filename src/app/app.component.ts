import { Component } from '@angular/core';

declare var $: any; //jquery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  slides = [
    {image: 'https://via.placeholder.com/600.png/09f/fff'},
    {image: 'https://via.placeholder.com/600.png/09f/ggg'},
    {image: 'https://via.placeholder.com/600.png'},
    {image: 'https://via.placeholder.com/600.png/FF0000/FFFFFF'},
    {image: 'https://via.placeholder.com/600.png/09f/ggg'},
    {image: 'https://via.placeholder.com/600.png'},
    {image: 'https://via.placeholder.com/600.png/09f/fff'},
    {image: 'https://via.placeholder.com/600.png/FF0000/0000'},
    {image: 'https://via.placeholder.com/600.png'},
 ];

  constructor() { }

  ngOnInit(){

  }

}
