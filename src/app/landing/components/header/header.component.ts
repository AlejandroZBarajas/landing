import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logo :string = 'assets/logo.png'
  title : string = "Find my bike"
  tool: string = "bike finder"

}
