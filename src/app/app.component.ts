import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule,
  ]
})
export class AppComponent {
  title = 'portfolio-angular';

  constructor(private router: Router) { }

  get showMainContent(): boolean {
    return this.router.url === '/';
  }
}
