import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ChartComponent} from './../chart/chart.component';
import{PnrComponent} from './../pnr/pnr.component';
import{StayComponent} from './../stay/stay.component';
import{HomeComponent} from './../home/home.component';
import{LoginComponent}from './../login/login.component';
import{RegisterComponent}from './../register/register.component';
import{CancelComponent} from './../cancel/cancel.component';
const routes: Routes = [
{path:'chart',component:ChartComponent},
{path:'register',component:RegisterComponent},

{path:'login',component:LoginComponent},
{path:'pnr',component:PnrComponent},
{path:'stay',component:StayComponent},
{path:'cancel',component:CancelComponent},
{path:'home',component:HomeComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
