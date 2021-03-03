import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateTestService {

  private zm1: Subject<number> = new Subject<number>();
  private counter: number = 0;
  public ZmOut: Observable<number> = this.zm1.asObservable();

  constructor() { }

  public Increase() {
    this.zm1.next(this.counter++);
  }

  public Decrease() {
    this.zm1.next(this.counter--);
  }

}
