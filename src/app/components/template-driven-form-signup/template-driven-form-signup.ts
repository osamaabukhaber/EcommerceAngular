import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Iuser } from '../../Models/iuser';

@Component({
  selector: 'app-template-driven-form-signup',
  imports: [],
  templateUrl: './template-driven-form-signup.html',
  styleUrl: './template-driven-form-signup.css'
})
export class TemplateDrivenFormSignup {

  userService=inject(UserService);
  adduser(){
    let u:Iuser = {
      name: 'John',
      email: 'z@gmail.com',
      password: 'aaaa'
    }
this.userService.addNewUser(u).subscribe((data) => {
        console.log('User added successfully', data);
    })
}




}
