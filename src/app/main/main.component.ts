import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { FooterComponent } from "../footer/footer.component";
import { OurServicesComponent } from "../our-services/our-services.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { OurExperienceComponent } from "../our-experience/our-experience.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavBarComponent, ContactUsComponent, FooterComponent, OurServicesComponent, AboutUsComponent, HeroSectionComponent, OurExperienceComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
