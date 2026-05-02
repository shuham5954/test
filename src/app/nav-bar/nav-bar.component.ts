import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIf , NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  constructor(){ }
  ngOnInit(): void {
    this.setActiveLink('home')
      
  }

  public openMobileMenu:boolean = false
  activeLink: string = ''; // Tracks the active link

  public mobileMenuToggle(){
    this.openMobileMenu = !this.openMobileMenu
    console.log(this.openMobileMenu ,"mobile menu click ")
  }

  setActiveLink(link: string) {
    this.openMobileMenu = !this.openMobileMenu
    this.activeLink = link;
  }

}
