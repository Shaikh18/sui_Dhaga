import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
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
  imgUrl;
  customerDetails: FormGroup;
  constructor(private camera: Camera) { }
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
  onCamera() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI

    }).then((res) => {
      this.imgUrl = res;
      console.log(this.imgUrl, 'onCamera')

    }).catch((err =>
      console.log(err)))
  }
  gallery() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL

    }).then((res) => {
      this.imgUrl = 'data:image/jpeg;base64,' + res;
      console.log(this.imgUrl, 'gamlleys')
    }).catch((err =>
      console.log(err)))
  }
  ngOnInit() {
    this.customerDetails = new FormGroup({
      // slide 1
      'name': new FormControl(),
      'contact': new FormControl(),
      'whatsapp': new FormControl(),

      // slide 2
      'sname': new FormControl(),
      'sno': new FormControl(),
      'floor': new FormControl(),
      'area': new FormControl(),
      'market': new FormControl(),

      // slide 3
      'status': new FormControl(),
      'vdays': new FormControl(),
      'cashondelivery': new FormControl(),
      'openbalance': new FormControl(),
      'bdata': new FormControl(),
      'outbalance': new FormControl(),
      'sdiscount': new FormControl(),
      'payment': new FormControl(),






    });
    this.customerDetails.statusChanges.subscribe(
      (status) => console.log(status, 'ng')
    );
  }
  onSubmit() {
    console.log(this.customerDetails);
    // this.signupForm.reset();
  }
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  onshow(e: Event) {
    console.log(e, 'w')
  }
}
