import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

/**
 * Auth0 provee sy propia funcion provider
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAuth0({ ...environment.auth0 }),
  ],
};
