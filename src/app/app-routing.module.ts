import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';

const routes: Routes = [
  {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NbLayoutModule, NbSidebarModule.forRoot()],
  exports: [RouterModule]
})

export class AppRoutingModule {}