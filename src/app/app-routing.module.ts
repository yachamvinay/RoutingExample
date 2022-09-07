import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguradService } from './authgurad.service';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const routes:Routes=[
  {path:'' ,component:LoginComponent},
 
  {path:'dashboard' ,component: DashboardComponent,canActivate:[AuthguradService],
  children:[ {path:'contact' ,component:ContactComponent},
  {path:'user',component:UserComponent},

 {path:'product' ,component:ProductComponent,canActivate:[AuthguradService],
children:[
 
  {path:'details/:id' ,component:ProductdetailComponent}

]}]},

 
 
  {path:'**' ,component:ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
