import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';

import { RouterModule, Routes, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'lazy',
    loadChildren: 'app/modules/lazy/lazy.module#LazyModule'
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor() {
    
  }

 }
