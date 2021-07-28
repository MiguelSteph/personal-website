import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedEventService {

  public onLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }
}
