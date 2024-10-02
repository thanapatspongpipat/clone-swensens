import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentModule } from 'src/app/component/component.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DeliveryComponent } from './delivery/delivery.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'delivery', component: DeliveryComponent}

];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, HomeComponent, DeliveryComponent],
  imports: [
    RouterModule.forChild(routes),
    ComponentModule,
    FormsModule,
    CommonModule,
    NgbModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
})
export class PagesModule {}
