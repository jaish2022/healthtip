import { Component, OnInit } from '@angular/core';
import { DiseaseService } from '../disease.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent  {
  showhideIcon:boolean=false;
  search:any;
  searchdisease:any;
  diseaselist:any;
  // route:any;

  constructor(private diseaseService:DiseaseService) {
    this.searchdisease = this.diseaseService.getDiseaseByFilter(); //[8 object]
  }
  
  showhideBox() {
    this.showhideIcon = !this.showhideIcon;
  }

  searchDisease(){
    // console.log(this.search);
    // let searchValue = this.search.toLowerCase();
    // console.log(searchValue);
    // const response = this.searchdisease.filter((item:any)=>{
    //   // con
    //  return item.title.toLowerCase().indexOf(searchValue) >= 0;
    
    // })
    const response = this.diseaseService.getDiseaseByFilter(this.search);
    console.log(response);
    this.searchdisease = response;
  }
  clearfilter(){
  this.search = null;
  }

  // navigateTo(route:any){
  //   // this.router.navigate('/');
  //   this.router.navigateByUrl(`/disease/${route}`);

  // }
  

}