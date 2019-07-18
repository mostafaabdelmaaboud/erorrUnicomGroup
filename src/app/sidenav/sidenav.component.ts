import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {
  @Output() closedNavbar = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  closeNavbar() {
    this.closedNavbar.emit()
  }
}
