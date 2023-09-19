import { Component } from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`
    .online{
        color:  darkgreen;
    }
        `]
})
export class ServerComponent{
    serverId;
    serverStatus;
    // pxValue;

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        this.serverId = Math.floor(Math.random()*(9000000)+1000000)
    }

    getServerStatus(){
        if (this.serverId%2==0) {
            return "offline"
        }
        else return "online";
    }

    getColor(){
        return this.serverStatus === 'online' ? 'lightGreen' : 'mistyrose';
    }

    // getRandomPxValue(){
    //     return Math.floor(Math.random()*10+1)
    // }

    
    getBorderColor(){
        // this.pxValue = this.getRandomPxValue()
        return this.serverStatus === 'online' ? '2px solid green' : '2px solid red';
    }
}