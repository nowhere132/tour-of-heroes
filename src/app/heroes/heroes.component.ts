import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  imports: [NgFor, RouterLink],
  providers: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent implements OnInit {
  constructor(
    public heroService: HeroService,
    public messageService: MessageService
  ) {}

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
