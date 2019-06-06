import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'transgasCatalogue';

  public itemsp = ['uno', 'dos', 'tres'];

  constructor(
  ) { }


  ngOnInit() {
  }

}
