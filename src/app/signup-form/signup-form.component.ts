import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './username.validators';
import { PasswordValidators } from '../common/validators/password.validations';

@Component({
	selector: 'signup-form',
	templateUrl: './signup-form.component.html',
	styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
	form = new FormGroup({
		account: new FormGroup({
			username: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
				UsernameValidators.shouldBeUnique,
				UsernameValidators.cannotContainNumber,
				UsernameValidators.cannotContainSpace
			]),
			password: new FormControl('', Validators.required)
		})
	});

	public form2;


	addTopic(topic: HTMLInputElement) {
		this.topics.push(new FormControl(topic.value));
		/*---*/console.log(this.topics);
		//empty topics enter field
		topic.value = '';
	}

	removeTopic(topic: FormControl) {
		let index = this.topics.controls.indexOf(topic);
		this.topics.removeAt(index);
	}

	get topics() {
		return this.form2.get('topics') as FormArray;
	}

	get username() {
		return this.form.get('account.username');
	}

	//login (or checking credentials in server)

	login() {
		/*let isValid = authService.login(this.form.value);
		if (isValid)
			this.form.setErrors({
				invalidLogin: true
			});*/

		this.form.setErrors({ invalidLogin: true });
	}


	//testing-debugging
	log(c) {
		console.log(c);
	}

	/*------------ exercice ------------*/

	public form3;

	constructor(fb: FormBuilder) {
		this.form2 = fb.group({
			name: ['', Validators.required],
			contact: fb.group({
				email: ['', Validators.required],
				phone: ['', Validators.required]
			}),
			topics: fb.array([])
		});

		this.form3 = fb.group({
			oldPass: ['', Validators.required],
			newPass: ['', Validators.required],
			repPass: ['', Validators.required]
		}, 
		{
			validator: PasswordValidators.matchPasswords
		}
		);

		//console.log('constructor: ' , this.newPass);
	}

	get oldPass() {
		return this.form3.get('oldPass');
	}

	get newPass() {
		return this.form3.get('newPass');
	}

	get repPass() {
		return this.form3.get('repPass');
	}
}