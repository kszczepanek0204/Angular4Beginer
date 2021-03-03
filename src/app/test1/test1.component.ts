import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UpdateTestService } from '../services/update-test.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  public liczba?: number;

  constructor(public counterService: UpdateTestService) { }

  ngOnInit(): void {
    this.counterService.ZmOut.subscribe(x => this.liczba = x);
  }

}
