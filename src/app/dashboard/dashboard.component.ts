import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class DashboardComponent  {
  name = 'Angular';
}