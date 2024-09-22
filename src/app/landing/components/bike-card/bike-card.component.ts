import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bike-card',
  templateUrl: './bike-card.component.html',
  styleUrl: './bike-card.component.css'
})
export class BikeCardComponent {
  @Input() title: string = "";

  constructor (){}

}
