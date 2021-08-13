import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title: 'Register';
  fname: string;
  lname: string;
  dob: string;
  address: address;
  mobile: string;
  email: string;
  password: string;
  hobbies: string[];
  foods: string[];
  showHobbies: boolean;

  constructor() {
    this.title = "Register";
    this.fname = "Avinash";
    this.lname = "Sinha";
    this.dob = "1999-08-03";
    this.address =
    {
      address: "23 Assam Rifles, Khatla",
      city: "Aizawl",
      state: "Mizoram",
      country: "India",
      pin: 796001
    };
    this.mobile = "9473421105";
    this.email = "avinash3899@gmail.com";
    this.password = "avinash3899";
    this.hobbies = ['music', 'esports', 'casual gaming', 'movies', 'diy electronics'];
    this.foods = ['rice and dal', 'Biryani', 'noodles', 'sweet', 'ice-cream'];
    this.showHobbies = false;
  }
  sayName() {
    console.log("my name is " + this.fname + " " + this.lname);
    console.log("my email is ", this.email);
    console.log("my address is ", this.address);
  }
  Details() {
    this.sayName();
  }
  toggleHobbies() {
    if (this.showHobbies == true) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }
  deleteFood(i: number) {
    this.foods.splice(i, 1);
  }
}

interface address {
  address: string;
  city: string;
  state: string;
  country: string;
  pin: number;
}
