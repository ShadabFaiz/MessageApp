import { Component, OnInit } from '@angular/core';
import { MatTab, MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { navigationOptions } from 'src/app/models/navigationOptions';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  tabs = navigationOptions;

  activeTab;
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  onTabChange(obj: MatTabChangeEvent) {
    this.setActiveTab(obj.tab);
    this.navigateTo(this.tabs[obj.index].url);
  }

  setActiveTab(tab: MatTab) {
    this.activeTab = tab;
  }
}
