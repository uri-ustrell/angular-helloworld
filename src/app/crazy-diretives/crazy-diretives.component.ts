import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'crazy-diretives',
	templateUrl: './crazy-diretives.component.html',
	styleUrls: ['./crazy-diretives.component.css']
})

export class CrazyDiretivesComponent {
	public things = [1, 2];
	public viewMode = 'otherwise';
	public thingsObj = [
		{ id: 1, name: 'thing 1' },
		{ id: 2, name: 'thing 2' },
		{ id: 3, name: 'thing 3' }
	];

	onAdd(){
		this.thingsObj.push({ id: 4, name: 'thing 4' });
	}

	onChange(thing){
		let index = this.thingsObj.indexOf(thing);
		this.thingsObj[index].name = 'patata';
	}

	onRemove(thing){
		let index = this.thingsObj.indexOf(thing);
		this.thingsObj.splice(index,1);
	}
}
	