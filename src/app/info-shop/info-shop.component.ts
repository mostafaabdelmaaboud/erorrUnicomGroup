import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-info-shop',
  templateUrl: './info-shop.component.html',
  styleUrls: ['./info-shop.component.sass']
})
export class InfoShopComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    console.log(data.infoShops)
  }
  ngOnInit() {
  }

}
