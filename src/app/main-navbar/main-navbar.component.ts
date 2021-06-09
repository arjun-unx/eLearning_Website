import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {

Development = ["Development","Web Development", "Data Science", "Mobile Development", "Programming Languages",  "Game Development", "Database Design & Development", "Software Testing", "Software Engineering", "Development Tools",
  "No-Code Development"];

Business = ["Business","Entrepreneurship","Communications","Management","Sales","Business Statergy","Operations","Project Management","Business Law","E-Commerce","Media","Industry"];

Programming=["Programming","C","C#","Java","Python","JavaScript","SQL","Data Structures","Arduino","Angular","React","Scala","Ruby"];
  
Arts=["Arts & Humanities","History","Music","Art","Philosophy"];

Animal=[ "Health","Basic Science","Health Informatics",
"Healthcare Management",
"Patient Care",
"Public Health",
"Research",
"Nutrition",
"Psychology"];

cs=[ "Computer Science","Java",
  "C++‎",
  "Javascript",
  "Blockchain",
  "Linux",
  "Agile",
  "IOT",
  "Scala",
  "HTML",
  "Data Structures"];

ds =["Data Science","Python",
  "Excel",
  "SQL",
  "R",
  "Tableau",
  "Big Data",
  "TensorFlow",
  "MATLAB",
  "Deep learning",
  "Machine Learning",
  "Artificial Intelligence",
  "Statistics",
  "IBM"];

it=["Information Technology","CyberSecurity",
"AWS",
"Google Cloud",
"SAP",
"Google"];

Algebra= ["Math & Logic","Algebra","Data Science","Calculus","Geometry","Linear Algebra","Logic","Pre-Algebra","Pre-Calculus","Probability"," Regression","Statistics","Data Analytics"];



constructor() { }

ngOnInit(): void {
  }

slides = [
    {'image': 'https://2s7gjr373w3x22jf92z99mgm5w-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/brain_AI_shutterstock_Jozsef-Bagota-300x150.jpg'}, 
    {'image': 'https://www.poweradmin.com/blog/wp-content/uploads/2018/07/ai.jpeg'},
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
  ];

}
