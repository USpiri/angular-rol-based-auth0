import {
  mergeApplicationConfig,
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    importProvidersFrom(AuthModule.forRoot({ ...environment.auth0 })),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
