import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShopService } from '../service/shop.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../Store/Reducer/shop.reducer';
import { Shop } from '../service/shop.interface';
declare var $:any;
@Component({
  selector: 'app-to-add-shop',
  templateUrl: './to-add-shop.component.html',
  styleUrls: ['./to-add-shop.component.sass']
})
export class ToAddShopComponent implements OnInit {
  loadingEntryShp = false;
  // Validator the number in input
  patternNumber = [Validators.required, Validators.pattern(/^[+]?([0-9]*[.])?[0-9]+$/)];
  // pattern Number less Than 4 in input
  NumberlessThan4 = [Validators.required, Validators.pattern(/^[1-3]+$/)];
  // pattern Number less Than 4 in input
  patternString = [Validators.required, Validators.pattern(/^[a-zA-z0-9_ \u0600-\u06FF]{3,}$/)];
  // pattern String
  patternStringNative = [Validators.required, Validators.pattern(/^[a-zA-z_ \u0600-\u06FF]{3,}$/)];
  formValidate = false;
  /* Start Form Group */
  form = new FormGroup({
    owner_name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-z_ \u0600-\u06FF]{3,34}$/)]),
    type: new FormControl('', [Validators.required, Validators.pattern(/^[1-2]+$/)]),
    shop_activity_id: new FormControl('', this.NumberlessThan4),
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
    billboard_font_type: new FormControl('', [Validators.required, Validators.pattern(/^[1-2]+$/)])
  });
  /* End Form Group */
  constructor(private shopService: ShopService, private store: Store<AppState> , private _snackBar: MatSnackBar, private router: Router) { }
  ngOnInit() {
  }
  save() {
    /* Start filter the date */
    var date = new Date(this.form.value.license_date);
    var dateFilter = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    var EndDate = new Date(this.form.value.license_end_date);
    var EndDateFilter = EndDate.getFullYear() + "-" + EndDate.getMonth() + "-" + EndDate.getDate();
    /* End filter the date */
    /* Start the variable filter the get data of form */
    let formGroup: Shop = {
      owner_name: this.form.value.owner_name,
      type: this.form.value.type,
      shop_activity_id: this.form.value.shop_activity_id,
      width: this.form.value.width,
      length: this.form.value.billboard_length,
      employee_number: this.form.value.employee_number,
      area: this.form.value.area,
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
      longitude: "30.0897826",
      latitude: "31.3004822"
    }
    /* End the variable filter the get data of form */
    /* Start check the form is valid or not */
    if(this.form.valid) {
      this.loadingEntryShp = true;
      this.shopService.createShop(formGroup).subscribe(data => {
        if(data.status == "success") {
          this._snackBar.open(data.message, "cancel", {
            duration: 2000,
          });
          this.loadingEntryShp = false;
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
          this.router.navigate(['/createShop']));
        } else {
          this.loadingEntryShp = false;
          alert(data.message);
        }
      }, error => {
        if(error.status === 401) {
          alert(error.message);
        }
        alert(error.status.message);
        console.log(error.status.message)
      });
    }
    /* End check the form is valid or not */
  }
}
