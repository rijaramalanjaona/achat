import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Article } from '../models/article';

@Injectable()
export class PanierService {

  constructor() { }

  private panierSubject = new BehaviorSubject<Article[]>([]);

  panierObservable = this.panierSubject.asObservable();

  addToPanier(article: Article) {
    console.log('addToPanier service', article);
    const current = this.panierSubject.getValue();
    current.push(article);
    console.log('notification current', current);
    this.panierSubject.next(current); // notification
  }
}
