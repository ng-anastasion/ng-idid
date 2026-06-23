import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { KNOWLEDGE_BASE_URL } from '@ng-hire-up/knowledge-base';
import { provideHighcharts } from 'highcharts-angular';
import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    // provideAnimationsAsync(),
    // provideStore(
    //   [], // Сюда позже добавим NGXS стейты
    //   withNgxsReduxDevtoolsPlugin()
    // ),
    // // Signal Store не требует глобальной регистрации,
    // // он работает через DI в компонентах или через providedIn: 'root'
    {
      provide: KNOWLEDGE_BASE_URL,
      useValue: environment.apiBaseUrl,
    },
    provideHighcharts()
  ],
};
