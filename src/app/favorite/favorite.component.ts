import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'favorite',
	templateUrl: './favorite.component.html',
	styleUrls: ['./favorite.component.css'],
	styles: [
		`
		i{
			background-color:green;
		}
		`
	],
	inputs: ['_isFavorite']
})
export class FavoriteComponent {

	@Input('isFavorite') public _isFavorite: boolean = false;

	@Output('caca') emissorFav = new EventEmitter();

	get isFavorite() {
		return this._isFavorite;
	}

	favClick() {
		//send feedback to service
		this._isFavorite = !this._isFavorite;
		this.emissorFav.emit({ newValue: this._isFavorite, secondValue: 'segundo' });
	}
}

export interface FavoriteChangedEventArgs {
	newValue: boolean,
	secondValue: string
}
