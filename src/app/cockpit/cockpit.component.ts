import {Component, EventEmitter, OnInit, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') bpCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  // newServerName='';
  // newServerContent = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bpCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  // onAddBlueprint(nameInput: HTMLInputElement) {
  //   this.bpCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   })
  // }

}
