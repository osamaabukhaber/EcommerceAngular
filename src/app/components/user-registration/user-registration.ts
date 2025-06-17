// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-registration',
//   imports: [],
//   templateUrl: './user-registration.html',
//   styleUrl: './user-registration.css'
// })
// export class UserRegistration {

// }


import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-registration',
  imports: [FormsModule,CommonModule],
  templateUrl: './user-registration.html'
})
export class UserRegistrationComponent {
  user = {
    fullName: '',
    email: '',
    mobiles: [''],
    password: ''
  };

  addMobile() {
    this.user.mobiles.push('');
  }

  removeMobile(index: number) {
    this.user.mobiles.splice(index, 1);
  }

  onSubmit(form: any) {
    if (form.valid) {
      Swal.fire({
        icon: 'success',
        title: 'Registration successful!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
