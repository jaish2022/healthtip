import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiseaseService } from '../disease.service';


@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent {

    disease:any;

    imageObject: Array<object> = [
      {
        image: './assets/images/fever1.webp',
        thumbImage: './assets/images/fever1.webp',
        alt: 'alt of image',
        // title: 'title of image'
      },
      {
            image: './assets/images/fever2.jpeg', // Support base64 image
            thumbImage: './assets/images/fever2.jpeg', // Support base64 image
            // title: 'Image title', //Optional: You can use this key if want to show image with title
            alt: 'Image alt', //Optional: You can use this key if want to show image with alt
            order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
        }, {
          image: './assets/images/fever3.jpeg', // Support base64 image
          thumbImage: './assets/images/fever3.jpeg', // Support base64 image
          // title: 'Image title', //Optional: You can use this key if want to show image with title
          alt: 'Image alt', //Optional: You can use this key if want to show image with alt
          order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
      }, {
        image: './assets/images/fever4.jpeg', // Support base64 image
        thumbImage: './assets/images/fever4.jpeg', // Support base64 image
        // title: 'Image title', //Optional: You can use this key if want to show image with title
        alt: 'Image alt', //Optional: You can use this key if want to show image with alt
        order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
      }, {
        image: './assets/images/fever5.jpeg', // Support base64 image
        thumbImage: './assets/images/fever5.jpeg', // Support base64 image
        // title: 'Image title', //Optional: You can use this key if want to show image with title
        alt: 'Image alt', //Optional: You can use this key if want to show image with alt
        order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
      }, {
        image: './assets/images/fever6.jpg', // Support base64 image
        thumbImage: './assets/images/fever6.jpg', // Support base64 image
        // title: 'Image title', //Optional: You can use this key if want to show image with title
        alt: 'Image alt', //Optional: You can use this key if want to show image with alt
        order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
      }

  ];
  constructor(private route: ActivatedRoute , private diseaseService:DiseaseService)   {
    const par =  this.route.params.subscribe( (params:any) => {
      const { id } = params;
      this.disease = this.diseaseService.getDiseaseById(id);
    } );
    // const { id } = this.route.snapshot.params;
    // this.id=id;
    // console.log('id is',par)
    // this.disease = this.diseaseService.getDiseaseById(id);
    
  }

  ngOnInit() {
  }

}
