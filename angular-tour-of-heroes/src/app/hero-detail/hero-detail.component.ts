import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input()
  public hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  public save(): void {
    if (this.hero == undefined) return;
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  public goBack(): void {
    this.location.back();
  }

  private getHero(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.heroService.getHero(parseInt(id))
          .subscribe(hero => this.hero = hero);
    }
  }
}
