import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JokeInterface } from './joke.interface';
import { Observable } from 'dbhd';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getJoke() : Observable<JokeInterface> {
    return;
  }
}
