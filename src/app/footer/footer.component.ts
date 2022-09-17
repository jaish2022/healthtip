import { Component, OnInit } from '@angular/core';
import { WEBSITE_NAME } from '../utils/contants';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  websitename = WEBSITE_NAME
  constructor() { }

  ngOnInit(): void {
  }

}
