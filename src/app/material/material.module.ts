import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const materials = [
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,
  MatSnackBarModule
];
@NgModule({
  imports: [
    CommonModule,
    materials
  ],
  exports: [materials],
})
export class MaterialModule { }
