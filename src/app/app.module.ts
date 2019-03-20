import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticleComponent } from './composants/article/article.component';
import { PanierComponent } from './composants/panier/panier.component';
import { PanierService } from './services/panier.service';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
