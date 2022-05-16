import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { StyleManagerService } from './services/style-manager.service';
import { ThemeService } from './services/theme.service';
import { AppThemeModule } from './modules/app-theme/app-theme.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MenuComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    AppThemeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [StyleManagerService, ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
