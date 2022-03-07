import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {
  temp2:number=0.0;
  messg="";
  temp = 37.0;
  validateTemp(temp2:number){
    if (temp2 >=36.1 && temp2 <=37.2) {
      this.messg="Allow access";
    }else if(temp2 > 37.2){
      this.messg ="Deny access,Temperature too high";
    }else{
      this.messg ="Deny access,Temperature too low";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
}