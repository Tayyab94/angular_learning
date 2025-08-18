import { Component } from '@angular/core';
import { counterService } from '../../services/counterService';

@Component({
  selector: 'app-b1',
  imports: [],
  // providers: [counterService],  // If we can to create separate instance of Statement  then we will use this..
  templateUrl: './b1.html',
  styleUrl: './b1.css'
})
export class B1 {
  constructor(public counter: counterService)
  {}

}
