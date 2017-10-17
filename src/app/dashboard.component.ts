import { Component } from '@angular/core';

@Component({
  template: `
      <h1>
        Welcome to {{title}}!
      </h1>
      ここはダッシュボードです
    `
})
export class DashboardComponent {
  title = 'アンギュラー';
}
