import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { OutletComponent } from './pages/outlet/outlet.component';
import { RegisterComponent } from './pages/register/register.component';
import { TableComponent } from './pages/table/table.component';
import { UploadFileComponent } from './pages/upload-file/upload-file.component';

const routes: Routes = [
  { path: '',component:OutletComponent,  children:[
    {path:'dashboard', component: DashboardComponent},
    {path:'table', component: TableComponent},
    {path: 'upload-file', component: UploadFileComponent}
  ], canActivate: [AuthGuard]},

  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
