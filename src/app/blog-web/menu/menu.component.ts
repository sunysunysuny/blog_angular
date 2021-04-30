import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private _commonSevice: CommonService,
  ) { }

  ngOnInit(): void {
  }
  closeMenu(){
    this._commonSevice.displayMenu.next(false);
  }
}
