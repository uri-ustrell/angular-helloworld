import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PanelService {
	private _loved: boolean = false;
	public counter: number = 13;
	public body: string = 'Here is the body of a tweet...';

	get loved() {
		return this._loved;
	}
}
