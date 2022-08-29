import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {
  // btnClickMe = false;
// changeText='This text will be changed when you click the Btn';
  inputText = '';
  userName = '';
  userNameCard=false;
  userNameInCard='';
  users=[];

  constructor() {
    // setTimeout(() => {
    //   this.btnClickMe = true;
    // }, 2000)
  }

  ngOnInit() {
  }

  onClickResetUserName(){
    this.userName=''
    this.userNameCard=false
    this.users=[]
  }

  onClickAddUserNameToCard(){
    this.userNameInCard=this.userName
    this.userNameCard=true
    this.users.push(this.userName)
  }

  // onCreateNewText() {
  //   this.userName = this.inputText;
  // }
  //
  // onTextInput(event: Event) {
  //   this.inputText = (<HTMLInputElement>event.target).value
  // }

}
