import { Component } from '@angular/core';
import { counterService } from '../../services/counterService';
import { CounterWithSingleService } from '../../services/counter-with-single-service';

@Component({
  selector: 'app-a',
  imports: [],
  templateUrl: './a.html',
  styleUrl: './a.css'
})
export class A {

  constructor(public counter: counterService, public SinglaCounterService: CounterWithSingleService)
  {}


}
