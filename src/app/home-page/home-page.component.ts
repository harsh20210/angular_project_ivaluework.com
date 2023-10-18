import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  mobileNumber: string = '';
  emailid: string = '';

  validationInMobile: boolean = false;
  validationInEmail: boolean = false;

  constructor(private titleService: Title) {}

  changetitle = () => {
    this.titleService.setTitle('Ivaluework - Homepage');
  };

  //Validation
  emailValidate = (email: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email)) {
      return false;
    }
    return true;
  };

  mobileValidate = (num: string) => {
    let reg = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[56789]\d{9}$/;
    if (reg.test(num)) {
      return false;
    }
    return true;
  };

  handleInputChange = (e: any, key: string) => {
    this.validationInMobile = false;
    this.validationInEmail = false;
    if (key === 'mobile') {
      this.mobileNumber = e.target.value;
    } else {
      this.emailid = e.target.value;
    }
  };

  handleBlurForMobile = (value: string) => {
    if (value === 'mobile') {
      this.validationInMobile = this.mobileNumber !== "" && this.mobileValidate(this.mobileNumber);
      console.log('validationInMobile => ', this.validationInMobile);
    } else {
      this.validationInEmail = this.emailid !== "" && this.emailValidate(this.emailid);
    }
  };

  handleSubmit = () => {
    console.log('dsahjdhsajdk');
  };
}
