import { Routes } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import{LoginComponent}from'./login/login.component';
import{RegesterComponent}from'./regester/regester.component';
import{ProductDestailsComponent}from'./product-destails/product-destails.component';
import {NotFoundComponent}from'./not-found/not-found.component';
import {CartComponent} from './cart/cart.component';

export const routes: Routes = [
{
path:'',
component:ProductListComponent,
},
{
path:'login',
component:LoginComponent,
},
{
path:'regester',
component:RegesterComponent,
},
{
path:'cart',
component:CartComponent,

},
{
path:'details/:id',
component:ProductDestailsComponent,
},
{
path:'**',
component:NotFoundComponent,
}

];
