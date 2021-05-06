import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ : any;

@Component({
  selector: 'app-about-it',
  templateUrl: './about-it.component.html',
  styleUrls: ['./about-it.component.scss']
})

export class AboutItComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  $('form').hide();
  }
    toggleForm(){
        $('form').slideToggle();
    }
}
