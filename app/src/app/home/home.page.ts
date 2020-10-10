import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  selectedDateString: string = new Date().toISOString();
  minDate: string = new Date().toISOString();
  maxDate: string = new Date().toISOString();

  get company() {
    return this.registrationForm.get("company");
  }
  get meet_With() {
    return this.registrationForm.get("meet_With");
  }
  get mobile_no() {
    return this.registrationForm.get("mobile_no");
  }
  get email() {
    return this.registrationForm.get("email");
  }
  get purpose() {
    return this.registrationForm.get("purpose");
  }
  get comments() {
    return this.registrationForm.get("comments");
  }
  get date_and_time() {
    return this.registrationForm.get("date_and_time");
  }
  get location() {
    return this.registrationForm.get("location");
  }
  public errorMessages = {
    company: [
      { type: "required", message: "Company name is required" },
      { type: "maxlength", message: "Company name not too large" },
    ],
    meet_With: [
      { type: "required", message: "Meet with whome is required" },
      { type: "maxlength", message: "not too large" },
    ],
    mobile_no: [
      { type: "required", message: "Mobile number  is required" },
      { type: "pattern", message: "please enter a valid number" },
    ],
    email: [
      { type: "required", message: "Email is required" },
      { type: "pattern", message: "please enter valid email " },
    ],
    purpose: [
      { type: "required", message: "Purpose is required" },
      { type: "maxlength", message: "not too large" },
    ],
    comments: [
      { type: "required", message: "comments  is required" },
      { type: "maxlength", message: "not too large" },
    ],
    date_and_time: [
      { type: "required", message: "Date and time is required" },
      { type: "number", message: "enter valid date and time" },
    ],
    location: [
      { type: "required", message: "location is required" },
      { type: "maxlength", message: "enter valid location" },
    ],
  };

  registrationForm = this.formBuilder.group({
    company: ["", [Validators.required, Validators.maxLength(100)]],
    meet_With: ["", [Validators.required, Validators.maxLength(100)]],
    mobile_no: [
      "",
      [
        Validators.required,
        Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$"),
      ],
    ],
    email: [
      "",
      [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"),
      ],
    ],
    purpose: ["", [Validators.required, Validators.maxLength(100)]],
    comments: ["", [Validators.required, Validators.maxLength(100)]],
    date_and_time: ["", Validators.pattern("^[0-9]{5}(?:-[0-9]{4})?$")],
    location: ["", [Validators.required, Validators.maxLength(100)]],
  });
  constructor(private formBuilder: FormBuilder, private platform: Platform) {
    this.platform.ready().then(() => {
      let date: Date = new Date();
      date.setDate(date.getDate() + 5);
      this.minDate = date.toISOString();
      date = new Date();
      date.setDate(date.getDate() + 5);
      this.maxDate = date.toISOString();
    });
  }
  public submit() {
    console.log(this.registrationForm.value);
  }
}
