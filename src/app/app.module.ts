import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ RegisterComponent} from './../register/register.component';
import{ ChartComponent } from './../chart/chart.component';
import{ LoginComponent } from './../login/login.component';
import{ PnrComponent } from './../pnr/pnr.component';
import{ StayComponent} from './../stay/stay.component';
import{ CancelComponent} from './../cancel/cancel.component';
import{ HomeComponent} from './../home/home.component';

@NgModule({
  declarations: [
    AppComponent,ChartComponent,PnrComponent,StayComponent,CancelComponent,HomeComponent,RegisterComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
