import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[appInputFormat]'
})
export class InputFormatDirective {

	@Input('appInputFormat') public format: string;

	constructor(private el: ElementRef) { }

	@HostListener('blur') onBlur() {
		let value: string = this.el.nativeElement.value;

		if (this.format == "uppercase")
			this.el.nativeElement.value = value.toUpperCase();
		else
			this.el.nativeElement.value = value.toLowerCase();
	}
}