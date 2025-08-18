import { Component } from '@angular/core';
import { counterService } from '../../services/counterService';

@Component({
  selector: 'app-a',
  imports: [],
  templateUrl: './a.html',
  styleUrl: './a.css'
})
export class A {

  constructor(public counter: counterService)
  {}

  
}
