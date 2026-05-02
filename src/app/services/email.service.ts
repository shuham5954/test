import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
  private serviceId = 'service_c5v3hol'; 
  private templateId = 'template_pdk2qg9'; 
  private publicKey = '0umfmDFKFkY30QkYs'; 

  sendEmail(templateParams: { [key: string]: string }): Promise<any> {
    return emailjs.send(this.serviceId, this.templateId, templateParams, this.publicKey);
  }
}
