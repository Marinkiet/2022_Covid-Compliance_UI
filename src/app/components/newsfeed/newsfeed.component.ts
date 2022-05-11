import { Component, OnInit } from '@angular/core';
import { Newsfeed } from 'src/app/interfaces/newsfeed';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  constructor(private newsfeedservice:NewsfeedService) { }

  ngOnInit(): void
  {
    this.onGetNews()
  }

  news!: Newsfeed[];
  onGetNews()
  {
    this.newsfeedservice.getNewsFeed().subscribe(
      (news:any)=>
      {
        this.news=news.data
        console.log(news);
      }
      )
  }

}
