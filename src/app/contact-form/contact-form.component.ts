import { Component } from '@angular/core';

@Component({
	selector: 'contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
	contactMethods = [
		{ id: 1, name: 'By eMail' },
		{ id: 2, name: 'By old Mail' },
		{ id: 3, name: 'By telepathy' }
	];

	log(x) {
		console.log(x);
	}

	submit(f) {
		console.log(f);
		console.log(f.value);
		console.log(f.value.nameSender);
		console.log(f.value.inputMail);
		console.log(f.value.comment);
	}
}
