import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ed-comp',
  templateUrl: './ed-comp.component.html',
  styleUrls: ['./ed-comp.component.css']
})
export class EdCompComponent implements OnInit {

  status: string = 'offline'

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getColor() {
    return this.status === 'online' ? 'chocolate' : 'grey';
  }

}
