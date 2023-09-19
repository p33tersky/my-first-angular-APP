import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  // selector: '[app-servers]',
  // selector: `.app-servers`,
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created'
  serverName = ''
  username=''
  usernameStatus
  serverCreated = false;
  servers = ['Testserver', 'testserver2']


  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },3000)

  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }


  isAllowedToProvideUsername(username:string){
    if(!(username.trim()==="")){
      this.usernameStatus = "Username " + username + " is valid " 
      return true;
    }else {
      this.usernameStatus = "Username is not valid " 
      return false;
    
    }
  }

  onReset(){
    this.username = '';
  }












  // onUpdateServerName(event: Event){
  //   this.serverName = (<HTMLInputElement> event.target).value
  // }
}
