import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bike-specs',
  templateUrl: './bike-specs.component.html',
  styleUrl: './bike-specs.component.css'
})
export class BikeSpecsComponent {
  @Input() brand:string='';
  @Input() imgPath:string='';
  @Input() imgDesc:string='';
  @Input() model:string='';
  @Input() price:string='';
  @Input() groupset:string='';

  constructor (){}

}
