import { Component, OnInit } from '@angular/core';
import { JokeInterface } from '../joke.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  joke: JokeInterface;

  ngOnInit() : void {

  }
}
