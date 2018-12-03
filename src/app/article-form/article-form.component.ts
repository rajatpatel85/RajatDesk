import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  language = ['JAVA','Spring','Springboot','Angular','React'];
  article = new Article(this.language[0],"","","");
  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    let newArticle = new Article(this.article.language, this.article.header, this.article.title, this.article.description);
    this.rest.addArticle(newArticle).subscribe(article1 => this.article);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.article); }

  constructor(public rest:RestService) {}

  ngOnInit() {
  
  }

  newArticle() {
    //this.article = new Article(1000, this.language[0], 'Set up environment','Set up environment');
  }

}
