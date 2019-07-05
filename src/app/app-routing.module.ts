import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  declarations: [DashboardComponent, AppComponent],
  imports: [RouterModule.forRoot(routes), NbLayoutModule, NbSidebarModule.forRoot()],
  exports: [RouterModule]
})

export class AppRoutingModule {}