import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './components/doctor/doctor.component';

const routes: Routes = [{ path: 'doctors', component: DoctorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
