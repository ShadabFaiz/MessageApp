import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { NavigationEnd, Router } from '@angular/router';
import { navigationOptions } from 'src/app/models/navigationOptions';
import { User } from 'src/app/models/user';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  tabs = navigationOptions;

  user = User;

  activeTabIndex = 0;

  constructor(private router: Router) {
    this.listenToRouteChanges();
  }

  ngOnInit() {}

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  onTabChange(obj: MatTabChangeEvent) {
    this.setActiveTab(obj.index);
    this.navigateTo(this.tabs[obj.index].url);
  }

  setActiveTab(tab: number) {
    this.activeTabIndex = tab;
  }

  isActiveTab(url: string) {
    return this.router.isActive(url, false);
  }

  private listenToRouteChanges() {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        const NewActiveTabIndex = this.tabs.findIndex(
          tab => tab.url === res.urlAfterRedirects
        );
        this.setActiveTab(NewActiveTabIndex);
      }
    });
  }
}
