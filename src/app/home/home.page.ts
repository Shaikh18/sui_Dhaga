import { Component } from '@angular/core';
import { Router, Route, Routes } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private menu: MenuController, private route: Router) {}
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  onnavigate() {
    console.log('worked');
    this.route.navigate(['/profile']);
  }
}
