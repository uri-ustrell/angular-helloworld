import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
	selector: 'courses', //<courses> css selector
	template: `
		<h2>{{ title }}</h2>
		<ul>
			<li *ngFor="let course of courses">
				{{ course }}
			</li>
			<img [src]="imgURL" />
			<table>
				<td [attr.colspan]="colspan" [class.active]="isActive">Hey dudes!</td>
			</table>
		</ul>
		<input [(ngModel)]="userName" type="text" (keyUp.enter)="onKeyUp()" >

		<button class="btn btn-primary" [style.backgroundColor]="isActive ? 'green' : 'blue'" (click)="onSave($event)" >Save</button>
		<br /><br /><br />
		{{ course.title | uppercase | lowercase }} <br />
		{{ course.rating | number:'1.2-2'}} <br />
		{{ course.students | number}} <br />
		{{ course.price | currency:'EUR':'symbol-narrow':'3.2-2' }} <br />
		{{ course.releaseDate | date:'shortDate' }}
		{{ course.description | summary:400 }}
	`
})

export class CoursesComponent {
	private _title = "List of courses";
	public courses;
	public imgURL = 'https://imgholder.ru/300';
	public colspan = '3';
	private _isActive = true;
	public userName = 'Oriol';
	course = {
		title: 'title of this course',
		rating: 4.9754,
		students: 30154,
		price: 190.95,
		releaseDate: new Date(2016, 3, 1),
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nostrum explicabo tenetur, nesciunt id. Assumenda, magnam incidunt saepe adipisci sit vero repudiandae. Vel, incidunt explicabo commodi quidem quam perspiciatis, ea veniam eveniet quasi nobis minus. Ipsum est ad, incidunt quasi dolore, eveniet ducimus libero culpa corporis consequuntur aspernatur doloribus adipisci!'
	}


	constructor(service: CoursesService) {
		this.courses = service.getCourses();
	}

	get title() {
		return this._title;
	}

	get isActive() {
		return this._isActive;
	}

	onSave($event) {
		console.log('Button was clicked');
		console.log($event);
		this._isActive = !this._isActive;
	}

	onKeyUp() {

		console.log(this.userName);
	}
}
