import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cliffs-of-moher',
    loadChildren: () => import('./cliffs-of-moher/cliffs-of-moher.module').then( m => m.CliffsOfMoherPageModule)
  },
  {
    path: 'newgrange',
    loadChildren: () => import('./newgrange/newgrange.module').then( m => m.NewgrangePageModule)
  },
  {
    path: 'bunratty-castle',
    loadChildren: () => import('./bunratty-castle/bunratty-castle.module').then( m => m.BunrattyCastlePageModule)
  },
  {
    path: 'glendalough',
    loadChildren: () => import('./glendalough/glendalough.module').then( m => m.GlendaloughPageModule)
  },
  {
    path: 'grafton-street',
    loadChildren: () => import('./grafton-street/grafton-street.module').then( m => m.GraftonStreetPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
