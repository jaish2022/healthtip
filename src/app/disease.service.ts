import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {
  // reloadCurrentPage:any;
  constructor() {}
  
  lists = [
    {
      id:1,
      title:'Fever',
      page : {
        title: `<h1>Healthcare Tips</h1>
        <h2>How to take care of yourself in common fever, learn from Ayurveda</h2>`,
        description: `<div class="text-center1">
        <p>With the changing mood of the season, there is also an influx of diseases. Many times
                        it is common to feel sore throat, body heat, runny nose etc. as soon as you wake
                        up in the morning. Many times, as soon as you wake up in the morning, the body
                        starts feeling hot and strange, but many people ignore it. In such a situation,
                        they become a victim of fever.Fever is such a disease due to which one does not
                        feel like doing any work properly. If the fever is high, then the problem
                        becomes even more. In such a situation, if you are asked how to take care of the
                        body with a normal fever, then what can be your answer. If you do not know about
                        it, then in this article, Ayurveda doctor Varalakshmi is going to tell you how
                        to take care of yourself in common fever. Let's know.
                        What not to do when you have a fever?
                </p>
        <img alt="" src="https://kalamtimes.com/uploads/images/news/20220330/1648630062_1.png">
        <p>At this point, Doctor Vara Lakshmi is going to tell what mistakes should be avoided after
                getting a fever. Let's know about it. He says that even after getting a fever, one
                should not take a bath by mistake. Many people think that if you take a bath with a
                little hot water, then you will feel fresh, but this mistake also puts them in more
                trouble. In such a situation, after getting a fever, do not try to take a bath with cold
                or hot water.
                Avoid eating curdYes, you must be aware that after getting a fever, cold things should
                be avoided by consuming them. Curd present in the kitchen is a cold food item. In such a
                situation, eating curd should be avoided after fever. Apart from this, heavy food should
                also be avoided during fever. She further says that consuming caffeine should also be
                avoided during fever
                Do not include these fruits in the diet</p>
</div>
<div class="text-center">
        <img alt="" src="https://kalamtimes.com/uploads/images/news/20220330/1648630078_1.png">
        <p>Although fruits are considered the best diet to maintain health, some fruits should be
                avoided when there is a fever. Fruits such as banana, watermelon and orange etc. should
                be avoided during fever. Doctor Vara Lakshmi says that during fever, excessive milk or
                ghee should also be avoided in the food.

                Don't exercise
                Many other things should be avoided during fever. Doctor Vara Lakshmi says that exercise
                should be avoided during fever. Apart from exercise, you should also avoid having sex.
                Apart from this, liquid food should be consumed at a regular time.

                What to do in case of fever?Now in this article, let us know what to do after getting a
                fever. Doctor Varalakshmi says that when there is a fever, then one should take a walk
                at home. He says that not much but light food should be kept on walking. Apart from
                this, keep drinking lukewarm water. Moong dal soup should be consumed during fever.
                Apart from this, sleeping on time is also very important. Apart from this, herbs can
                also be consumed after consulting a doctor.

                Imager Credit:(@freepik)

                Disclaimer

                Your skin and body are different just like you. We endeavour to bring you accurate, safe
                and expertly verified information through our articles and social media handles but
                still consult your doctor before trying any home remedy, hack or fitness tip.</p>
</div>`,
      },
      img:'https://www.jiva.com/img/diseases/15758957421.jpg',
      description:'',
    },
    {
      id:2,
      title:'Fatigue',
      img:'https://www.jiva.com/img/diseases/15758957512.jpg',
      description:'',
    },
    {
      id:3,
      title:'Pain',
      img:'https://www.jiva.com/img/diseases/15758957593.jpg',
      description:'',
    },
    {
      id:4,
      title:'Unusual bleeding',
      img:'https://www.jiva.com/img/diseases/15758957684.jpg',
      description:'',
    },
    {
      id:5,
      title:'Nagging cough',
      img:'https://www.jiva.com/img/diseases/1582690469cough.jpg',
      description:'',
    },
    {
      id:6,
      title:'Indigestion problems or trouble swallowing.',
      img:'https://www.jiva.com/img/diseases/1582690619indigestion.jpg',
      description:'',
    },

    {
      id:7,
      title:'Unexplained weight loss',
      img:'https://www.jiva.com/img/diseases/15758957977.jpg',
      description:'',
    },
    {
      id:8,
      title:'Skin changes',
      img:'https://www.jiva.com/img/diseases/15758958058.jpg',
      description:'',
    },
    
  ];
  getTopDisease(){
    // return [];
    return this.lists;
  }
  
  getDiseaseById(diseaseId:number){
    console.log('diseaseId',diseaseId)
    console.log('list',this.lists);
    const response =this.lists.find((item:any)=>{
      return item.id==diseaseId;
    })
    console.log('response', response);
    return response;
  }
  getDiseaseByFilter(search:any = ''){
    // return this.lists;

    if(!search){
      return [];
    }
    let searchValue = search.toLowerCase();
    // console.log(searchValue);
    const response = this.lists.filter((item:any)=>{
      // con
     return item.title.toLowerCase().indexOf(searchValue) >= 0;
    
    })
    return response;
    
  }
   
 




}
