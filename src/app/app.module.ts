import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './landing/components/header/header.component';
import { BikeCardComponent } from './landing/components/bike-card/bike-card.component';
import { DividerComponent } from './landing/components/divider/divider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BikeCardComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
