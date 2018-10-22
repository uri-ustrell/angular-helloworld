import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'title-capitalize',
	templateUrl: './title-capitalize.component.html',
	styleUrls: ['./title-capitalize.component.css']
})
export class TitleCapitalizeComponent implements OnInit {

	public titleCaps: string;

	constructor() { }

	ngOnInit() {
	} 
}
