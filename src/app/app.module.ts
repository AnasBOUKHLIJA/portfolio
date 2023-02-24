import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAnimationsModule } from 'ngx-animations';
import { ProjectsComponent } from './projects/projects.component';
import { CompetencesComponent } from './competences/competences.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    CompetencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
