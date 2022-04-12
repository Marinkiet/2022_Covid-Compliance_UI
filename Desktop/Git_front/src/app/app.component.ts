import { Component ,OnInit} from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Covid Compliance UI';
  constructor() {

  }
  ngOnInit(): void {
  }
 
  
}
