import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },

  {
    path: 'register',

    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'customer-details',
    loadChildren: () =>
      import('./customer-details/customer-details.module').then(
        (m) => m.CustomerDetailsPageModule
      ),
  },
  {
    path: 'customerList',
    loadChildren: () =>
      import('./messages/messages.module').then((m) => m.MessagesPageModule),
  },
  {
    path: 'authenticator',
    loadChildren: () =>
      import('./authenticator/authenticator.module').then(
        (m) => m.AuthenticatorPageModule
      ),
  },

  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'addOrder',
    loadChildren: () => import('./add-order/add-order.module').then( m => m.AddOrderPageModule)
  },
  {
    path: '',
    redirectTo: 'addOrder',
    pathMatch: 'full',
  },  {
    path: 'catalogue',
    loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./add-product/add-product.module').then( m => m.AddProductPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
