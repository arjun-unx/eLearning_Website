import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {'image': 'https://miro.medium.com/max/10000/1*HLGtY6O2vUHqIyEbWdmBgA.jpeg'}, 
    {'image': 'https://previews.123rf.com/images/alexdndz/alexdndz2010/alexdndz201000172/157499573-language-courses-landing-page-with-people-characters-teaching-service-web-banner-e-learning-platform.jpg'},
    {'image': 'https://thumbs.dreamstime.com/z/web-137639013.jpg'}, 
    {'image': 'https://www.tradeready.ca/wp-content/uploads/2017/09/Conference-Header-Image-Large-banner-web.jpg'}, 
    {'image': 'https://www.postscapes.com/wp-content/uploads/2018/03/2.png'}
  ];
}
