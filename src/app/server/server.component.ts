import { Component } from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId = 11;

    serverStatus = "offline";

    getServerStatus(){
        if (this.serverId%2==0) {
            return "offline"
        }
        else return "online";
    }
}