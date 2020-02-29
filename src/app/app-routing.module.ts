import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [

{ path:'home',component:HomeComponent},
{ path:'features', component : FeaturesComponent},
{ path:'pricing', component:PricingComponent},
{ path :'shop', component :ShopComponent},
{path:'',component :HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
