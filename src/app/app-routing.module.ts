import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BridesmaidsComponent } from './wedding-party/bridesmaids/bridesmaids.component';
import { GroomsmenComponent } from './wedding-party/groomsmen/groomsmen.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'wedding-party',
    children: [
      {
        path: 'bridesmaids',
        component: BridesmaidsComponent
      },
      {
        path: 'groomsmen',
        component: GroomsmenComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
