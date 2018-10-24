import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
	@Input() title: string;
	public droper: boolean = false;
	public bodyHeight: number = 0;
	public bodyPadding: number = 0;

	girala(){
		console.log();
		this.droper = !this.droper;
		if (this.droper){
			this.bodyHeight = 150;
			this.bodyPadding = 30;
			
		}else {
 			this.bodyHeight = 0;
			this.bodyPadding = 0;
		}
	}
}