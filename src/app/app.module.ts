import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NbThemeModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    NbThemeModule.forRoot(),
    AppRoutingModule
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
