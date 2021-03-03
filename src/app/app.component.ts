import { Component, OnInit } from '@angular/core';
import { UpdateTestService } from './services/update-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  zmLiczba = 0;
  title = 'Lekcja1';

  public constructor(public counterService: UpdateTestService) { }

  public ngOnInit() {
    this.counterService.ZmOut.subscribe(x => this.zmLiczba = x);
  }
}
