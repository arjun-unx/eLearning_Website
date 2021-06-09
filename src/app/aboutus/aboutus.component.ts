import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
click(){
  alert("Thankyou For Your Feedback");
}
  constructor() { }

  ngOnInit(): void {
  }

}
