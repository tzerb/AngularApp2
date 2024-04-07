import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  
// bootstrapApplication(ProgressSpinnerOverviewExample, {
//   providers: [
//     provideAnimations(),
//     provideHttpClient(),
//     importProvidersFrom(MatNativeDateModule)
//   ]
// }).catch(err => console.error(err));