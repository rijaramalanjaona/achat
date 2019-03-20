import { Component, OnInit } from '@angular/core';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  total: number;
  nbArticle: number;

  constructor(private panierService: PanierService) {
    this.panierService.panierObservable.subscribe(nouveauPanier => {
      console.log('subscribe ...', nouveauPanier);
      this.total = nouveauPanier.reduce((curr, art) => curr + art.prix, 0);
      this.nbArticle = nouveauPanier.length;
    });
  }

  ngOnInit() {
  }

}
