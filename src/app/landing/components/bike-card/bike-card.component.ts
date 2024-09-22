import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bike-card',
  templateUrl: './bike-card.component.html',
  styleUrl: './bike-card.component.css'
})
export class BikeCardComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() imgDesc: string ='';
  @Input() labelColor:string='';
  @Input() textColor: string ='';

  constructor (){}

}
