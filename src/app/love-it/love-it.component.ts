import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PanelService } from './panel.service';

@Component({
	selector: 'love-it',
	templateUrl: './love-it.component.html',
	styleUrls: ['./love-it.component.css']
})

export class LoveItComponent {
	@Input('counter') public counter: number;
	@Output('changeLove') public emissorLove = new EventEmitter();
	@Input('loveIt')  public loveIt: boolean;
	public body: string;
	
	constructor(service: PanelService) {
		//init by service
		this.loveIt = service.loved;
		this.counter = service.counter;
		this.body = service.body;
	}

	clickLove(){
		//send back to service...
		this.loveIt = !this.loveIt;
		//what sends when clicked
		this.emissorLove.emit({
			loveIt: this.loveIt
		});
		//counter redefine
		this.counter += (this.loveIt) ? 1 : -1;
	}
}
