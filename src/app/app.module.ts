import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import {  Course2 } from './courses.component';
import { CoursesService } from './courses.service';
import { Course1Service } from './course1.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite.component';
import { PanelComponent } from './panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    Course2,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService,
    // Course1Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
