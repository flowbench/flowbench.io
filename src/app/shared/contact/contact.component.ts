import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'flb-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_7juoled', 'template_3yaiw7m', e.target as HTMLFormElement, 'user_hgpl4QL5cTlWlO6dsUiIV')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  ngOnInit(): void {
  }
  


}
