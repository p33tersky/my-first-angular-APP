import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ButtonTaskComponent } from './button task/button-task/button-task.component';
import { BindingComponentsTaskComponent } from './binding-components-task/binding-components-task.component';
import { SecondBindingComponentsTaskComponent } from './second-binding-components-task/second-binding-components-task.component';
import { PanelComponent } from './second-binding-components-task/panel/panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    ButtonTaskComponent,
    BindingComponentsTaskComponent,
    SecondBindingComponentsTaskComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatFormFieldModule,
     MatSelectModule,
      MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
