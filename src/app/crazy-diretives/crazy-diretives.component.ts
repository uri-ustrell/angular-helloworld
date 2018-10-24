import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'crazy-diretives',
	templateUrl: './crazy-diretives.component.html',
	styleUrls: ['./crazy-diretives.component.css']
})

export class CrazyDiretivesComponent {
	public things = [1, 2];
	public viewMode: string = 'otherwise';
	public isFavorite: boolean = true;
	public canSave: boolean = true;
	public thingsObj = [{
			id: 0,
			name: 'click on <b>Things Gen</b> to generate things'
		}];

	loadThings() {
		this.thingsObj = [
			{ id: 1, name: 'thing 1' },
			{ id: 2, name: 'thing 2' },
			{ id: 3, name: 'thing 3' }
		];
	}

	onAdd() {
		this.thingsObj.push({ id: 4, name: 'thing 4' });
	}

	onChange(thing) {
		let index = this.thingsObj.indexOf(thing);
		this.thingsObj[index].name = 'patata';
	}

	onRemove(thing) {
		let index = this.thingsObj.indexOf(thing);
		this.thingsObj.splice(index, 1);
	}

	trackThing(index, thing) {
		return (thing) ? thing.id : undefined;
	}

	onSave() {
		this.canSave = !this.canSave;
	}

	favClick() {
		//send feedback to service
		this.isFavorite = !this.isFavorite;
	}
}