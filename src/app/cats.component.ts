import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CatService } from './cat.service';
import { Cat } from './cat';

@Component({
  template: `<p>My lovely cats</p>
    <ul>
      <li *ngFor="let cat of cats">
        <span>{{cat.id}}</span> {{cat.name}}
      </li>
    </ul>`
})
export class CatsComponent implements OnInit {
  cats: Cat[];

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.catService.getCats().then(cats => this.cats = cats);
  }
}
