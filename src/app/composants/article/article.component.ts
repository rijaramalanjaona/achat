import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article;

  constructor(private panierService: PanierService) {

  }

  addToPanier() {
    console.log('addToPanier dans article component', this.article);
    this.panierService.addToPanier(this.article);
  }

  ngOnInit() {
  }

}
