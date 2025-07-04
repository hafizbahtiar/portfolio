import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
  .then(() => console.log('Application bootstrapped successfully!'))
  .catch(err => console.error('Bootstrap error:', err));
