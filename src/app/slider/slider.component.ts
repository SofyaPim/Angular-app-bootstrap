import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
 slide1 = "../../assets/img/main_photo.jpg"
 slide2 = "../../assets/img/main_photo2.jpg"
 slide3 = "../../assets/img/main_photo3.jpg"
 slide4 = "../../assets/img/main_photo4.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
