import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
