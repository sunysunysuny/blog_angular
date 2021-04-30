import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuVisible:any
  constructor(
    private _commonSevice: CommonService,
  ) { 
    this._commonSevice.displayMenu.subscribe(data => {
      this.menuVisible = data;
      console.log(this.menuVisible);
    })
  }

  ngOnInit(): void {
    this.menuVisible = false;
  }

}
