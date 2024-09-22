import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BikeCardComponent } from './components/bike-card/bike-card.component';
import { DividerComponent } from './components/divider/divider.component';




@NgModule({
  declarations: [

  
    HeaderComponent,
        BikeCardComponent,
        DividerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [  

  ]
})
export class LandingModule { }
