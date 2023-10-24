import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeadmComponent } from 'src/app/admin/homeadm/homeadm.component';
import { HomeComponent } from 'src/app/client/home/home.module';

const routes: Routes = [
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
