import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  @Input() opendSideNav: boolean = false;
  @Output() sidenavToggle= new EventEmitter();

  constructor() {}

  ngOnInit() {
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
