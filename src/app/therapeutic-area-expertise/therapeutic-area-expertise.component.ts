import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-therapeutic-area-expertise',
  standalone: true,
  imports: [NgFor],
  templateUrl: './therapeutic-area-expertise.component.html',
  styleUrl: './therapeutic-area-expertise.component.css'
})
export class TherapeuticAreaExpertiseComponent implements OnInit {
  constructor(private router: Router){  }
  
    ngOnInit() {
       this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    }
  readonly sectionTitle = 'Therapeutic Area Expertise';

  readonly sectionContent =
    'At PharosCura Clinical Services, we combine deep therapeutic expertise with execution excellence to deliver high-performing clinical trials across diverse indications. From accelerated patient recruitment to flawless compliance, we customize every strategy to meet the unique demands of each study-driving speed, quality, and reliability at every stage.';

  readonly trialHighlight = 'Conducted 12+ trials';

  readonly therapeuticAreas = [
    'Oncology',
    'Dermatology',
    'Gastroenterology',
    'Cardiology',
    'Ophthalmology',
    'Neurology',
    'Urology',
    'Vaccines',
    'Nutraceuticals',
    'Medical Devices and so on...'
  ];
}
