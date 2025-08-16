import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  // http:HttpClient
  // constructor(http: HttpClient)
  // {
  //     this.http= http;
  // }
  
  constructor(private http:HttpClient)
    {

    }

    // Ther are some case where you need http. like inside the function.. so then we can use this syntex 
    // private http= Inject(HttpClient)

  getJokes()
  {
    // this.http.get("https://api.chucknorris.io/jokes/random?category=celebrity").subscribe((data)=>{

    // }) 

    return this.http.get("https://api.chucknorris.io/jokes/random?category=history");
  }
}
