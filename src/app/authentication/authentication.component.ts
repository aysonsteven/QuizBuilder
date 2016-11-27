import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';
import { UserServiceService } from '../services/user-service.service'




interface autData{
  username:AbstractControl;
  password:AbstractControl;
}
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  loginfrm: FormGroup;
  auth: autData= <autData>{};
  errorCheck = {}

  constructor( 
    private formblder: FormBuilder, 
    private userSrvc: UserServiceService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
     ) { }

  ngOnInit() {
    this.loginfrm = this.formblder.group({
      'id': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]

    });
    this.auth.username = this.loginfrm.controls['id'];
    this.auth.password = this.loginfrm.controls['password'];
  }

  validateForm(){
    if(! this.auth.password) 
      {
      this.errorCheck = { error: 'error' }
      return false;
    }
    }


  onClickSubmit(val){
    if ( this.validateForm() == false ) return;
    this.errorCheck = { progress: 'processing' }
    this.userSrvc.login( this.loginfrm.value, res =>{
      this.errorCheck = { success: 'Login success'}
      this.router.navigate(['/Dashboard'])
    }, e=>{
      this.errorCheck={ error: 'error' }
    })
  }
}
