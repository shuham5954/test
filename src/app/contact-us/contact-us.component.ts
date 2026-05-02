import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ToastrService } from 'ngx-toastr'; // Import ToastrService
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {

  public contactForm!: FormGroup;

  public isButtonDisabled:boolean = false;
  public priority: string = '';

  constructor(private fb: FormBuilder,private toster: ToastrService, private emailService: EmailService) {
    this.setFormBuilder();
  }

  goto(para:string , valueFilter?:string){
    if(para === 'phoneNumber'){
      if (valueFilter == '1') {

        const phoneNumber = '9409681645'; 
        window.location.href = `tel:${phoneNumber}`;
        
      }

      if (valueFilter == '2') {

        const phoneNumber = '9427458207'; 
        window.location.href = `tel:${phoneNumber}`;
        
      }

    }
    if(para === 'email'){


      const email = ' pharoscuraclinicalservices@gmail.com'; 
      const subject = 'Your Subject Here'; 
      const body = 'Your message here'; 
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    if(para === 'map'){

    }
    
  }

  setPriority(priority: string) {
    console.log(priority);
    
    this.priority = priority
    }

  setFormBuilder() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phonNumber: ['', Validators.required , ],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }





  public disableBtn(){
    this.isButtonDisabled = true;
    setTimeout(() => {
      this.isButtonDisabled = false
    }, 5000);


  }




  public sendMsg() {
    if (this.contactForm?.valid) {
      const templateParams = {
        name: this.contactForm.value.name,
        phonNumber: this.contactForm.value.phonNumber,
        email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
      };

      this.emailService.sendEmail(templateParams).then(() => {
          this.toster.success('', 'msg send ✅', {
            progressAnimation: 'decreasing',
            progressBar: true,
            timeOut: 5000, // Display duration in milliseconds
            easing: 'ease-out', // Animation easing
            easeTime: 100, // Animation duration
            positionClass: 'toast-bottom-left', // Custom position
          });

          this.contactForm.reset({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        })
        .catch((error: any) => {
          console.error('Failed to send email:', error);
          this.toster.error( '' ,'email service under maintenance' , {
            progressAnimation: 'decreasing',
            progressBar: true,
            timeOut: 5000, // Display duration in milliseconds
            easing: 'ease-out', // Animation easing
            easeTime: 100, // Animation duration
            positionClass: 'toast-bottom-left', // Custom position
          });
        });

        this.disableBtn();


    } else {
      this.toster.error('', 'enter valid Email and fill all fild', {
        progressAnimation: 'decreasing',
        progressBar: true,
        timeOut: 5000, // Display duration in milliseconds
        easing: 'ease-out', // Animation easing
        easeTime: 100, // Animation duration
        positionClass: 'toast-bottom-left', // Custom position
      });
      this.disableBtn()
    }
  }
}
