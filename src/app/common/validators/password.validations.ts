import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
	//never worked
	static matchPasswords(control: AbstractControl) {
		
		let newPass = control.get('newPass').value;
		let repPass = control.get('repPass').value;

		if (newPass !== repPass){
			return { notMatchPasswords: true };
		}
		
		//console.log(newPass, repPass);

		return null;
	}
}