import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  // imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
