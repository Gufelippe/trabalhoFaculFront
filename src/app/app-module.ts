import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { App } from './app';
import { Item } from './item/item';

@NgModule({
  declarations: [
    App,
    Item
  ],
  imports: [
    BrowserModule,
    HttpClientModule   // <-- necessário para fazer requisições HTTP
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { }
