// import { Component } from '@angular/core';
// import { RouterLink, RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   imports: [RouterLink,RouterModule],   // routermodule أو
//   templateUrl: './navbar.html',
//   styleUrl: './navbar.css'
// })
// export class Navbar {

// }


import { Component } from '@angular/core';
import { Router, RouterLink,RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterModule,CommonModule],   // routermodule أو
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isLoggedIn = false;

  constructor(public authService:AuthService, private router: Router) {
    this.authService.isLoggedIn$.subscribe(status => this.isLoggedIn = status);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    
  }
}
