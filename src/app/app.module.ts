import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductionComponent } from './components/production/production.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './components/employee-delete/employee-delete.component';
import { ProductionAddComponent } from './components/production-add/production-add.component';
import { ProductionEditComponent } from './components/production-edit/production-edit.component';
import { LineComponent } from './components/line/line.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'employee/add', component: EmployeeAddComponent},
  {path: 'employee/view', component: EmployeeViewComponent},
  {path: 'employee/edit', component: EmployeeEditComponent},
  {path: 'employee/delete', component: EmployeeDeleteComponent},
  {path: 'production', component: ProductionComponent},
  {path: 'production/add', component: ProductionAddComponent},
  {path: 'production/edit', component: ProductionEditComponent},
  {path: 'line', component: LineComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    NavbarComponent,
    ProductionComponent,
    EmployeeAddComponent,
    EmployeeViewComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent,
    ProductionAddComponent,
    ProductionEditComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
