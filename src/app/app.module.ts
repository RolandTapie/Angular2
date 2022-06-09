import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Composant1Component } from './composant1/composant1.component';
import { AppareilComponent } from './appareil/appareil.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Composant1Component,
    AppareilComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
