import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  activeTab: string = 'tab1';

  constructor() { }

  ngOnInit(): void { }

  /**
   * @author Vikas Tiwari
   * @description Tab toggle handler
  */
  switchTab(tab: string) {
    this.activeTab = tab;
  }
}
