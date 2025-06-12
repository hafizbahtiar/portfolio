import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent)
  .then(() => console.log('Application bootstrapped successfully!'))
  .catch(err => console.error('Bootstrap error:', err));
