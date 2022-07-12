import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  navItems = [{linkName: 'D1B'}, {linkName: 'D1C'}, {linkName: 'D1D'}, {linkName: 'MSB'}, {linkName: 'RA1'}, {linkName: 'RA2'}, {linkName: 'RA3'}, {linkName: 'RA4'}, {linkName: 'RB1'}, {linkName: 'RP1'}];

  navbarCollapsed = true;

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }

  constructor() { }

}