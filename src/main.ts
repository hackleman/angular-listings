import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { AppComponent } from './app/components/main/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
