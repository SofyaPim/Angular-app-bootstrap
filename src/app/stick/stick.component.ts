import { Component, OnInit, Input } from '@angular/core';
import { Stick } from '../app.component';

@Component({
  selector: 'app-stick',
  templateUrl: './stick.component.html',
  styleUrls: ['./stick.component.scss']
})
export class StickComponent implements OnInit {

@Input() stick: Stick

  stickTitle = 'Music'
  stickText = 'The future belongs to those, who believe in beauty of their dreams'
  imgUrl = '../../assets/img/road.jpg'
  textColor = 'gray'
  constructor() { }

  ngOnInit(): void {

setInterval(() => {
  this.imgUrl = '../../assets/img/thumb1Contrast.jpg'
}, 3000) 


  }
  changestickTitle(){
    this.stick.stickTitle = 'booked'
  }
  inputHandler(value){
this.stick.stickTitle = value
  }
  changeHandler(){
    console.log(this.stickTitle)
  }
}
