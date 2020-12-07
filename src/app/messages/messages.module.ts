import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {faHome,faSearch,faArchive,faFileSignature,
  faAddressBook,faUserMd,faDesktop} from '@fortawesome/free-solid-svg-icons/';
import { MessagesPageRoutingModule } from './messages-routing.module';

import { MessagesPage } from './messages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesPageRoutingModule,
    
  ],
  declarations: [MessagesPage]
})
export class MessagesPageModule {}

@Component({

})
export class MenuComponent implements OnInit {
faHome = faHome;
faSearch = faSearch;
faArchive = faArchive;
faFileSignature = faFileSignature;
faAddressBook = faAddressBook;
faUserMd = faUserMd;
faDesktop = faDesktop;
constructor() { }

ngOnInit() {
}

}
