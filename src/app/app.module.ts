import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './shared/table/table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { ListComponent } from './shared/list/list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ListComponent,
    SpinnerComponent,
    UsersComponent,
    HomeComponent,
    PaymentsComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatRippleModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
