import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

/**
 * Auth0 provee sy propia funcion provider
 */
const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), provideAuth0({ ...environment.auth0 })],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
