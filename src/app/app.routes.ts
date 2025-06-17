import { provideRouter, RouterLinkActive, Routes, withViewTransitions } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Product } from './components/product/product';
import { NotFoundPage } from './components/not-found-page/not-found-page';
import { ProductParent } from './components/product-parent/product-parent';
import { MainComp } from './components/main-comp/main-comp';
import { ProductDetailsComponent } from './components/product-details-component/product-details-component';
import { UserRegistrationComponent } from './components/user-registration/user-registration';
import { AdminSignupComponent } from './components/admin-signup/admin-signup';
import { LoginComponent } from './components/login/login';
import { InsertProduct } from './components/insert-product/insert-product';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
    // {path:'', redirectTo:'home', pathMatch:'full'},
    // {path:'home',component:Home},
    // {path:'about',component:AboutUs},
    // {path:'product',component:Product},
    // {path:'products',component:ProductParent},
    // {path:'',redirectTo:'home', pathMatch:'full'},
    // {path:'**',component:NotFoundPage}

    {path:'', component:MainComp, children:[
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'home',component:Home},
      {path:'products',component:ProductParent, canActivate: [AuthGuard]},
      {path:'products/:id',component:ProductDetailsComponent, canActivate: [AuthGuard]},
      {path:'user',component:UserRegistrationComponent},
      {path:'admin/signup',component:AdminSignupComponent},
      {path:'login',component:LoginComponent},
      {path:'insertproduct',component:InsertProduct},
    ]},
    {path:'**',component:NotFoundPage}

];

// provideRouter(routes,withViewTransitions());
