import { Component , OnInit} from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  // title = 'ticket-generation-app';

 ticketForm !: FormGroup;
subject: any;
priority: any;
description: any;
fruits : any;


  constructor() {}

  ngOnInit() {
    this.initForm();
    this.fruits=["mango","apple"];                                                                                                                                   
  }

	onSubmit() {
		// Since we have  access to the FormGroup instance we can directly output the same
		console.log(this.ticketForm);  
    
    
    this.subject=this.ticketForm.value.subject;

    this.priority=this.ticketForm.value.priority;
    this.description= this.ticketForm.value.description;
	}


  private initForm() {
    this.ticketForm = new FormGroup({
      'subject': new FormControl(null, Validators.required),
      'priority': new FormControl(null),
      'description': new FormControl(null, Validators.required)
    });
  }
}


