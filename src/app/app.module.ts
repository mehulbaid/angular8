import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NbThemeModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule,
    FormsModule,
    NbThemeModule.forRoot(),
    AppRoutingModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
