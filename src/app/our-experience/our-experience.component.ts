import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-our-experience',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './our-experience.component.html',
  styleUrl: './our-experience.component.css',
})
export class OurExperienceComponent implements OnInit {

  constructor(private router: Router){  }

  ngOnInit() {
     this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      window.scrollTo(0, 0);
    }
  });
  }
  stats = [
    { value: '10+', label: 'Years collective clinical operations experience' },
    { value: '50+', label: 'Studies supported across phases and therapeutic areas' },
    { value: '15+', label: 'Countries and regions with site and partner networks' },
    { value: '100%', label: 'Commitment to GCP, ethics, and data integrity' },
  ];

  focusAreas = [
    {label : 'Site Network', route : 'experiencePage'},
    {label : 'Therapeutic Area Expertise', route : 'therapeuticAreaExpertise'}
  ];
}
