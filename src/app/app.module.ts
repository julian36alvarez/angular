import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { UpdateComponent } from './update/update.component';
import {Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';








const routes: Route[] = [
{path: '', component:HomeComponent},
{path: 'home', component:HomeComponent},
{path: 'form', component:FormComponent},
{path: 'form/:id', component:FormComponent},
{path: 'update', component:UpdateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
