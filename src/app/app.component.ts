import { Component } from '@angular/core';
import PAGE_TITLE from './utils/contants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = PAGE_TITLE.HOME;
}
