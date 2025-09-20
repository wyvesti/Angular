/* import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AuthInterceptor } from './app/core/interceptors/auth-interceptor';
import { routes } from './app/app.routes';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localeFr);

  bootstrapApplication(App, {
  providers: [
    provideHttpClient(), // nécessaire pour HttpClient
    provideRouter(routes), 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, // mon interceptor
    { provide: LOCALE_ID, useValue: 'fr' }
  ]
}).catch(err => console.error(err)); */

import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import { AuthInterceptor } from './app/core/interceptors/auth-interceptor';

registerLocaleData(localeFr);

bootstrapApplication(App, {
  providers: [
    // HttpClient + gestion des interceptors
    provideHttpClient(withInterceptorsFromDi()),

    // Router
    provideRouter(routes),

    // Ton AuthInterceptor
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    // Localisation FR
    { provide: LOCALE_ID, useValue: 'fr' }
  ]
}).catch(err => console.error(err));
