import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vac-card',
  templateUrl: './vac-card.component.html',
  styleUrls: ['./vac-card.component.css']
})
export class VacCardComponent implements OnInit {

  constructor() { }
  private apiUrl=environment.apiUrl;
  vacCard:any
  ngOnInit(): void
  {
    this.viewVaccCard(`${sessionStorage.getItem('user_id')}`);
  }


  viewVaccCard(studentNumber)
  {
    return `${this.apiUrl}/select_pp/view/${studentNumber}`;
  }

}
