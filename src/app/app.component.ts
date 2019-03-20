import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  articles =  [
    {id: 1, libelle: 'test1', prix: 10},
    {id: 2, libelle: 'test2', prix: 15},
    {id: 3, libelle: 'test3', prix: 22}
  ];
}
