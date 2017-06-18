import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	form;

	ngOnInit() {
	  this.form = new FormGroup({
			// firstName: new FormControl("", Validators.required),
			firstName: new FormControl("", this.textValidation),
			lastName: new FormControl("", Validators.compose([
				Validators.required,
				Validators.minLength(4),
				Validators.pattern('[\\w\\-\\s\\/]+')
			])),
			languages: new FormControl("")
		}) 
  }

  textValidation(control){
  	if (control.value.length < 3) {
  		return {'firstName': true}
  	}
  }
  
	
  onSubmit(u){
  	console.log(u)
  }
}