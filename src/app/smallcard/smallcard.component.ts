import { Component, OnInit, Input } from '@angular/core';
import { smallCard } from '../app.component';

@Component({
  selector: 'app-smallcard',
  templateUrl: './smallcard.component.html',
  styleUrls: ['./smallcard.component.scss']
})
export class SmallcardComponent implements OnInit {


  @Input() smallcard : smallCard
  @Input() index: number


  smallCardImgUrl = '../../assets/img/road.jpg'
  smallCardTitle: string
  smallCardText:string
  smallCardDate: Date = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
