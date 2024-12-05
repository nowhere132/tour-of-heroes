import { Component } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-heroes',
  imports: [UpperCasePipe],
  providers: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
}
