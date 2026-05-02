import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NgIf , NgClass , FormsModule , NgFor,CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  values = [
    {
      icon: 'fas fa-heartbeat',
      title: 'Compassion',
      description: 'Delivering care with empathy and understanding'
    },
    {
      icon: 'fas fa-hand-holding-medical',
      title: 'Excellence',
      description: 'Maintaining highest standards in healthcare'
    },
    {
      icon: 'fas fa-award',
      title: 'Integrity',
      description: 'Upholding ethical practices and transparency'
    }
  ];

  team = [
    {
      name: 'Dr. Parth Bhimani',
      position: 'Director',
      bio: 'Harnessing a wealth of clinical research knowledge to deliver unparalleled site management solutions at PharosCura.',
      image: ''
    },
    {
      name: 'DRx. Yash Rana',
      position: 'Director',
      bio: 'Guiding the clinical trials with strategic vision, operational precision, and an unwavering commitment to scientific excellence at PharosCura Clinical Services.',
      image: ''
    }
  ];


}
