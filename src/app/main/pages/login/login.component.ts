import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  LoginForm: FormGroup;

  constructor(
    private _apiService: ApiService,
    private formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submitLogin(): void {
    if (this.LoginForm.valid) {
      const formData = this.LoginForm.value;
      this._apiService.loginUser(formData).subscribe(
        (response: any) => {
          console.log(response);
          const authToken = response.token;
          this._apiService.saveAuthToken(authToken);
          const userRole = response.user.userRole;
          localStorage.setItem('currentUser', JSON.stringify({ role: userRole }));
          Swal.fire(
            'Login Successful',
            'You have been logged in!',
            'success'
          ).then(() => {
            this._router.navigateByUrl('home').then(() => {
              location.reload();
            });
          });
        },
        (error: any) => {
          console.error('Login failed:', error);
          Swal.fire('Login Failed', 'Invalid email or password', 'error');
        }
      );
    }
  }
}
