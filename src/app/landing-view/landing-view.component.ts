import { Component } from '@angular/core';
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { OurExperienceComponent } from "../our-experience/our-experience.component";
import { OurServicesComponent } from "../our-services/our-services.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";

@Component({
  selector: 'app-landing-view',
  standalone: true,
  imports: [HeroSectionComponent, AboutUsComponent, OurExperienceComponent, OurServicesComponent, ContactUsComponent],
  templateUrl: './landing-view.component.html',
  styleUrl: './landing-view.component.css'
})
export class LandingViewComponent {

}
