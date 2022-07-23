import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { SignUpRequestPayload } from './signup.request.payload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   signUpRequestPayload : SignUpRequestPayload;
   signUpForm : FormGroup;

  constructor(private authService : AuthService,private toastr:ToastrService,private router:Router) { 
     this.signUpRequestPayload = {
      username: '',
      email : '',
      password : ''
     };
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',Validators.required),

    });
  }

  signUp(){
         this.signUpRequestPayload.email = this.signUpForm.get('email').value;
         this.signUpRequestPayload.username = this.signUpForm.get('username').value;
         this.signUpRequestPayload.password = this.signUpForm.get('password').value;

         this.authService.signUp(this.signUpRequestPayload)
          .subscribe(data =>{
              this.router.navigate(['/login'],
              {queryParams:{registered:'true'}});
              
          },error =>{
            console.log(error);
            this.toastr.error('Kayıt Başarısız Lütfen Tekrar Deneyin')
          });


  }

}
