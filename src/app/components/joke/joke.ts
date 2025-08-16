import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../services/joke-service';

@Component({
  selector: 'app-joke',
  imports: [],
  templateUrl: './joke.html',
  styleUrl: './joke.css'
})
export class Joke implements OnInit{

  constructor(private jobService: JokeService){}


  jokeOfTheday:string=""
  ngOnInit(): void {
      this.jobService.getJokes().subscribe((data:any)=>{
      this.jokeOfTheday=data.value
      })
  }

  loadNewJoke()
  {
     this.jobService.getJokes().subscribe((data:any)=>{
      return data.value
      })
  }

  GetAnOtherJoke()
  {

    // The old syntex
    //  this.jobService.getJokes().subscribe((data:any)=>{
    //     this.jokeOfTheday=data.value
    //     },(err)=>{
    //       console.log("error hai "+err)
    //     })

    // New one

    this.jobService.getJokes().subscribe({
      next: (data:any)=>{
        this.jokeOfTheday= data.value
      },
      error:(err)=> console.log("Error Occur "+err),
    })
  }
}
