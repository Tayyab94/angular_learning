import { Component } from '@angular/core';
import { Joke } from '../joke/joke';
import { JokeService } from '../../services/joke-service';

@Component({
  selector: 'app-detail',
  imports: [Joke],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail {

}
