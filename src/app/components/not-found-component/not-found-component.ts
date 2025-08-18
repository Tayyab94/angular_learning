import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-component',
  imports: [RouterLink],
  templateUrl: './not-found-component.html',
  styleUrl: './not-found-component.css'
})
export class NotFoundComponent {

  constructor(private location: Location){}
  goBack(){
    this.location.back();
  }
}
