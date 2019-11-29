import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AddressService } from '../../../services/address.service';
import { ICountry, ISates } from '../countries.sates';


@Component({
  selector: 'app-adress-editor',
  templateUrl: './adress-editor.component.html',
  styleUrls: ['./adress-editor.component.scss']
})
export class AdressEditorComponent implements OnInit {
  listCountries:ICountry[];
  listStates:ISates[];
  formData = {}
  console = console;
  addressForm: FormGroup;
  constructor(private service : AddressService) { }

  getCountries(){
    this.service.getCountries()
    .subscribe(countries => this.listCountries = countries);
  }
  
  getStates(){
    this.service.getStates()
    .subscribe(states => this.listStates = states);
  }
  OnCountriesChange($event){
    if($event.target.value=="IN"){
      this.addressForm.get('state').enable();
    }
    else{
      this.addressForm.get('state').disable();
      this.addressForm.get('state').setValue(undefined);
    }
  }
  ngOnInit() {
    this.getCountries();
    this.getStates();
    let password = new FormControl('', Validators.required);
    let confirmPassword = new FormControl('', CustomValidators.equalTo(password));

    this.addressForm = new FormGroup({
      username: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(9)
      ]),
      firstname: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
     // website: new FormControl('', CustomValidators.url),
      //date: new FormControl(),
      city: new FormControl('', [
        Validators.required
      ]),
      country: new FormControl('', [
        Validators.required
      ]),
      states: new FormControl('', [
        Validators.required
      ]),
      phone: new FormControl('', CustomValidators.phone('BD')),
      houseno: new FormControl('', [
        Validators.required
      ]),
      street: new FormControl('', [
        Validators.required
      ]),
      gender: new FormControl('', [
        Validators.required
      ]),
      // agreed: new FormControl('', (control: FormControl) => {
      //   const agreed = control.value;
      //   if(!agreed) {
      //     return { agreed: true }
      //   }
      //   return null;
      // })
    })
  }

}
