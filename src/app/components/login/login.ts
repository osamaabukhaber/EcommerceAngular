import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  // imports: [NgModule,CommonModule],
    imports: [CommonModule,FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.auth.login(this.email, this.password).subscribe(success => {
        if (success) {
          this.router.navigate(['/products']);
        } else {
          this.errorMsg = 'Invalid credentials';
        }
      });
    }
  }
}
