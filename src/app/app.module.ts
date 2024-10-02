import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PagesModule } from './main/pages/pages.module';
import { Routes, RouterModule } from '@angular/router';
import { ComponentModule } from './component/component.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  {
    path: 'pages',
    loadChildren: () =>
      import('./main/pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/pages/miscellaneous/error', //Error 404 - Page not found
  },
];
@NgModule({
  declarations: [AppComponent, ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    RouterModule,
    HttpClientModule,
    PagesModule,
    ComponentModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
