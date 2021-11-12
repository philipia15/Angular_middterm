import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List } from '../user.interface';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() user: List | undefined | null;
  @Output() saveEvent = new EventEmitter<List | undefined | null>();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.saveEvent.emit(this.user);
  }

}
