import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { ReactiveFormsModule } from '@angular/forms';  // For ReactiveForms
import * as AOS from 'aos';
import { Init } from 'v8';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent ,  ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit   {

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    // Only initialize AOS in the browser
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000, // Duration of the animation
        offset: 120, // Offset from the top
      });
    }
  }
}
