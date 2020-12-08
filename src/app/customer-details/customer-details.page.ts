import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
})
export class CustomerDetailsPage implements OnInit {
  @ViewChild(IonSlides) slider: IonSlides;
  @ViewChild('slides') sld: IonSlides;

  segment = 0;
  constructor() { }
  async segmentChanged(event) {

    await this.slider.slideTo(this.segment);
    this.slider.update();
  }
  next() {
    this.sld.slideNext()

  }
  prev() {
    this.sld.slidePrev()

  }
  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();

    this.focusSegment(this.segment + 1);
  }

  focusSegment(segmentId) {
    document.getElementById('seg-' + segmentId).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }
  ngOnInit() {
  }
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  onshow(e: Event) {
    console.log(e, 'w')
  }
}
