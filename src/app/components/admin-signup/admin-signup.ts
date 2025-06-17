import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { AdminService } from '../services/admin.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-signup.html',
  styleUrls: ['./admin-signup.css']
})
export class AdminSignupComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private adminService: AdminService, private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.adminService.addUser(this.user).subscribe({
        next: () => this.router.navigate(['/products']),
        error: () => alert('Failed to add user!')
      });
    }
  }
}
