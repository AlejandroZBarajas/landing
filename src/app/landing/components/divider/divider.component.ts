import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css'
})
export class DividerComponent {
  @Input() father:string='';
  @Input() fatherColor : string = '';
  @Input() son:string='';
  @Input() sonColor : string = '';
  @Input() color : string = '';

  constructor(){}


}
