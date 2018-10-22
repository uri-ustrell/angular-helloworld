import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {

	title = 'My First -> Angular App';

	tweet = {
		loveIt: false
	}

	post = {
		title: "Title",
		isFavorite: true
	}

	onFavoriteChanged(isFavorite: FavoriteChangedEventArgs) {
		console.log('Favorite changed!: ', isFavorite.newValue);
	}

	onLoveChanged(emited_obj){
		console.log(emited_obj.loveIt + ' love');
	}
}