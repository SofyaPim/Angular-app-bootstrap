import {Component} from '@angular/core';

export interface smallCard {
  smallCardTitle: string
  smallCardText: string
}

export interface Stick {
  stickTitle: string
  stickText: string
  imgUrl: string
  category:string
   
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: ``

})
export class AppComponent {


  toggle = true
  sticks: Stick[] = [{
    stickTitle: 'More than just a music festival',
  stickText: `Some quick example text to build on the card title and make up the bulk of the
  card's content.`,
  imgUrl: '../../assets/img/thumb1.jpg',
  category: 'music'
  },
  {
    stickTitle: ' Life tastes better with coffee',
  stickText: `Some quick example text to build on the card title and make up the bulk of the
  card's content.`,
  imgUrl: '../../assets/img/thumb2.jpg',
  category: 'lifestyle'
  },
  {
    stickTitle: 'American Dream',
  stickText: `Some quick example text to build on the card title and make up the bulk of the
  card's content.`,
  imgUrl: '../../assets/img/thumb3.jpg',
  category: 'photodiary'
  },
  {
    stickTitle: 'A day exploring the Alps',
    stickText: `Some quick example text to build on the card title and make up the bulk of the
  card's content.`,
    imgUrl: '../../assets/img/thumb4.jpg',
    category: 'lifestyle'
  }


]

  

  smallcards: smallCard[] = [{
      smallCardTitle: 'Go with us',
      smallCardText: 'Never allow someone to be your priority while allowing yourself to be their option.'
    },
    {
      smallCardTitle: 'Go faster us',
      smallCardText: '«Success consists of going from failure to failure without loss of enthusiasm». (Winston Churchill)'
    },

    {
      smallCardTitle: 'Go yourself',
      smallCardText: ' «It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change». (Charles Darwin)'
    },
    {
      smallCardTitle: 'Go yourself',
      smallCardText: ' «It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change». (Charles Darwin)'
    }

  ]
 
 changeTitle(ev): void{
   console.log(ev.target)
 }
 
  toggleCards() {
    this.toggle = !this.toggle
  }

}
