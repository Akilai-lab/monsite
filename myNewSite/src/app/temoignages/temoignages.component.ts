import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ : any;

@Component({
  selector: 'app-temoignages',
  templateUrl: './temoignages.component.html',
  styleUrls: ['./temoignages.component.scss']
})
export class TemoignagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  $('.videoToOpen').hide();
  }
  
  toOpen() {
    $('.videoToOpen').show();
    $('#monCarousel').hide();
  }
  
}
