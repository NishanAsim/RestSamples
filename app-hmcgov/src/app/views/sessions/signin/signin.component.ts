import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar, {static: false}) progressBar: MatProgressBar;
  @ViewChild(MatButton, {static: false}) submitButton: MatButton;

  signinForm: FormGroup;

  constructor(private router:Router) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    })
  }

  signin() {
    const signinData = this.signinForm.value
    console.log(signinData);

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
    this.router.navigate(['address/newaddress']);

  }

}
