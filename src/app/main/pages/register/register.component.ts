import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControlName,
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user: any = {};
  RegisterForm: FormGroup;

  constructor(
    private _apiService: ApiService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.RegisterForm = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      birthday: [''],
      gender: ['', Validators.required],
      customCheck1: [false, Validators.requiredTrue],
      customCheck2: [false, Validators.requiredTrue],
    });
  }

  submit() {
    if (this.RegisterForm.valid) {
      // Form is valid, proceed with submitting the form data
      const formData = { ...this.RegisterForm.value };
      delete formData.customCheck1;
      delete formData.customCheck2;

      this._apiService.registerUser(formData).subscribe((res) => {
        console.log('User registered successfully:', res);
        Swal.fire('Registration Successful', 'User registered successfully!', 'success')
          .then(() => {
            this._router.navigateByUrl('login');
          });

      });
    } else {
      // Form is invalid, handle errors or show validation messages
      console.log('Form is invalid');
      Swal.fire('Registration Failed', 'Error during registration', 'error');
    }
  }

  selectGender(gender: string) {
    this.RegisterForm.patchValue({ gender: gender });
  }

  toggleCustomCheck(controlName: string) {
    this.RegisterForm.get(controlName)?.setValue(
      !this.RegisterForm.get(controlName)?.value
    );
  }
}
