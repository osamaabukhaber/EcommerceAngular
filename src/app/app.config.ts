import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: false }),
    // provideZonelessChangeDetection(),
    // provideZoneChangeDetection({ eventCoalescing: false }),
    provideRouter(routes),
    provideRouter(routes,withViewTransitions()),
    provideHttpClient(withFetch())  // day 6
  ]
};
