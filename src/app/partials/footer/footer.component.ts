import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  constructor(private router: Router) {}

  navigateToPrivacyPolicy(): void {
    this.router.navigate(['/privacy-policy']);
  }
}
