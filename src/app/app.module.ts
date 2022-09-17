import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { LogoComponent } from './logo/logo.component';
import { SerachComponent } from './serach/serach.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FooterComponent } from './footer/footer.component';
import { AyurvedasummaryComponent } from './ayurvedasummary/ayurvedasummary.component';
import { HomeComponent } from './home/home.component'; 

import { Routes, RouterModule } from '@angular/router';
import { DiseaseComponent } from './disease/disease.component';
import { DiseaseService } from './disease.service';

const routes : Routes = [
  {path: '' , component:  HomeComponent},
  {path: 'disease/:id' , component:  DiseaseComponent},
  // {path: 'ayurveda', component: }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ListComponent,
    LogoComponent,
    SerachComponent,
    MaincontainerComponent,
    LoginformComponent,
    FooterComponent,
    AyurvedasummaryComponent,
    HomeComponent,
    DiseaseComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [DiseaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
