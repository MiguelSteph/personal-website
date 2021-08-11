import { Component, OnInit } from '@angular/core';
import {PersonalInfoService} from "../../core/services/personal-info.service";
import {MailService} from "../../core/services/mail.service";

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  profileInformation: any;
  isSubmitted: boolean;

  constructor(private personalInfoService: PersonalInfoService,
              private mailService: MailService) { }

  ngOnInit(): void {
    this.isSubmitted = false;
    this.profileInformation = this.personalInfoService.getMyInformation();
  }

  get personalProfile() {
    return this.profileInformation;
  }

  sendMessage(formData: any) {
    this.isSubmitted = true;
    const data = new FormData();
    data.append("name", formData.fullName);
    data.append("email", formData.emailAddress);
    data.append("message", formData.messageContent);

    this.mailService.sendEmail(data).subscribe(result => {
      if (!result) {
        this.isSubmitted = false;
      }
    });
  }
}
