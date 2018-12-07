import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/auth.guard';
import { AuthGuard2 } from './shared/auth.guard2';

export const routes: Routes = [
  {
      path: '',
      loadChildren: './layout/layout.module#LayoutModule',
      canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: './layout/layout.module#LayoutModule',
    canActivate: [AuthGuard]
},
  {
      path: 'login',
      loadChildren: './login/login.module#LoginModule',
      canActivate: [AuthGuard2]
  },
  {
      path: 'register',
      loadChildren: './register/register.module#RegisterModule',
      canActivate: [AuthGuard2]
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
