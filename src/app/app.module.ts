import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SignupFormComponent } from './signup-form/signup-form.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCapitalizeComponent } from './title-capitalize/title-capitalize.component';
import { PanelComponent } from './panel/panel.component';
import { LoveItComponent } from './love-it/love-it.component';
import { CrazyDiretivesComponent } from './crazy-diretives/crazy-diretives.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
  	CoursesComponent,
  	CourseComponent,
  	SummaryPipe,
  	FavoriteComponent,
  	TitleCapitalizeComponent,
  	PanelComponent,
  	LoveItComponent,
  	CrazyDiretivesComponent,
  	InputFormatDirective,
  	ZippyComponent,
  	ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  	CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}