import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-login-page',
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  error: any;
  loginFormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  loading = false;
  constructor(private authService: Auth) {
    this.authService.subscribeToLoading().subscribe(loging => { this.loading = loging; console.log(this.loading) })
  }

  async startLoginProcess() {
    if (this.loginFormGroup.valid) {
      const userName = this.loginFormGroup.value.userName || '';
      const password = this.loginFormGroup.value.password || '';
      await this.authService.login(userName, password);
    }
  }
}
