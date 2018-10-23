import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCapitalizeComponent } from './title-capitalize/title-capitalize.component';
import { PanelComponent } from './panel/panel.component';
import { LoveItComponent } from './love-it/love-it.component';
import { CrazyDiretivesComponent } from './crazy-diretives/crazy-diretives.component';

@NgModule({
  declarations: [
    AppComponent,
	CoursesComponent,
	CourseComponent,
	SummaryPipe,
	FavoriteComponent,
	TitleCapitalizeComponent,
	PanelComponent,
	LoveItComponent,
	CrazyDiretivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  	CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}