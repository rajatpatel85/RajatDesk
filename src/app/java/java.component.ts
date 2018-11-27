import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  articles:any = [];

  constructor(public rest:RestService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articles = [];
    this.rest.getArticles().subscribe((data: {}) => {
      console.log(data);
      this.articles = data;
    });
  }

}
