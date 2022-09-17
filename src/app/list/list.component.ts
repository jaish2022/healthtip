import { Component, OnInit } from '@angular/core';
import { DiseaseService } from '../disease.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  lists:any = [];

  constructor(private diseaseService : DiseaseService) {
    this.lists = this.diseaseService.getTopDisease();  
  }
  
}
