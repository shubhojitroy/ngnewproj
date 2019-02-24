import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'nnp-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  // @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  onClick() {
    // this.notify.emit('clicked');
    this.ratingClicked.emit(`the rating ${this.rating} was clicked!`);
  }
  ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
  }

}
