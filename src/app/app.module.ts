import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboadComponent } from './dashboad/dashboad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginGuardGuard } from './guards/login-guard.guard';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DashboadComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
   
   
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule],
  providers: [LoginGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
