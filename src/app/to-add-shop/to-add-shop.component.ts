import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShopService } from '../service/shop.service';
import {MatSnackBar} from '@angular/material/snack-bar';

declare var $:any;
@Component({
  selector: 'app-to-add-shop',
  templateUrl: './to-add-shop.component.html',
  styleUrls: ['./to-add-shop.component.sass']
})
export class ToAddShopComponent implements OnInit {
  patternNumber = [Validators.required, Validators.pattern(/^[+]?([0-9]*[.])?[0-9]+$/)];
  NumberlessThan = [Validators.required, Validators.pattern(/^[1-4]+$/)];
  patternString = [Validators.required, Validators.pattern(/^[a-zA-z0-9_ ا-ي]{3,}$/)];
  patternStringNative = [Validators.required, Validators.pattern(/^[a-zA-z_ ا-ي]{3,}$/)];
  form = new FormGroup({
    owner_name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-z_ ا-ي]{3,34}$/)]),
    type: new FormControl('', this.NumberlessThan),
    shop_activity_id: new FormControl('', this.NumberlessThan),
    width: new FormControl('', this.patternNumber),
    length: new FormControl('', this.patternNumber),
    employee_number: new FormControl('', this.patternNumber),
    floor_number: new FormControl('', this.patternNumber),
    area: new FormControl('', this.patternStringNative),
    street: new FormControl('', this.patternString),
    alley: new FormControl('', this.patternString),
    locality: new FormControl('', this.patternString),
    locality_number: new FormControl('', this.patternNumber),
    license_number: new FormControl('', this.patternNumber),
    license_type: new FormControl('', this.patternStringNative),
    license_date: new FormControl('', [Validators.required]),
    license_end_date: new FormControl('', [Validators.required]),
    billboard_name: new FormControl('', this.patternString),
    billboard_type: new FormControl('', this.patternString),
    billboard_width: new FormControl('', this.patternNumber),
    billboard_length: new FormControl('', this.patternNumber),
    billboard_height: new FormControl('', this.patternNumber),
    billboard_font_type: new FormControl('', this.NumberlessThan),
    longitude: 30.0897826,
    latitude: 31.3004822
  });
  constructor(private shopService: ShopService, private _snackBar: MatSnackBar) { }
  ngOnInit() {
  }
  save() {
    var date = new Date(this.form.value.license_date);
    var dateFilter = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    var EndDate = new Date(this.form.value.license_end_date);
    var EndDateFilter = EndDate.getFullYear() + "-" + EndDate.getMonth() + "-" + EndDate.getDate();

    let formGroup = {
      owner_name: this.form.value.owner_name,
      type: this.form.value.Type,
      shop_activity_id: this.form.value.shop_activity_id,
      width: this.form.value.width,
      length: this.form.value.billboard_length,
      employee_number: this.form.value.employee_number,
      area: this.form.value.Area,
      alley: this.form.value.alley,
      billboard_font_type: this.form.value.billboard_font_type,
      billboard_height: this.form.value.billboard_height,
      billboard_length: this.form.value.billboard_length,
      billboard_name: this.form.value.billboard_name,
      billboard_type: this.form.value.billboard_type,
      billboard_width: this.form.value.billboard_width,
      floor_number: this.form.value.floor_number,
      license_date: dateFilter,
      license_end_date: EndDateFilter,
      license_number: this.form.value.license_number,
      license_type: this.form.value.license_type,
      locality: this.form.value.locality,
      locality_number: this.form.value.locality_number,
      street: this.form.value.street,
      longitude: 30.0897826,
      latitude: 31.3004822
    }

    if(this.form.valid) {

      this.shopService.createShop(this.form.value).subscribe(data => {

        if(data.status === "success") {

          this._snackBar.open(data.message, "cancel", {
            duration: 2000,
          });
        }

      }, error => {
        if(error.status === 404) {
          alert("this post is Error");
        }
        alert(error.status.message);
        console.log(error.status.message)
      });

    }
  }
}
