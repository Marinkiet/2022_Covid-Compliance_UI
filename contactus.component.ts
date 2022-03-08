import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
  
})
export class ContactusComponent implements OnInit {

  name!: string;
  lastname!: String;
  email!: string;
  message!: string;

  constructor() { }

  ngOnInit(): void {
  }
  submitForm() {
    alert('Sibmitted Successful');
  }

}
