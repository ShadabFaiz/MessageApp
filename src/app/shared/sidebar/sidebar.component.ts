import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigationOptions } from 'src/app/models/navigationOptions';
import { User } from 'src/app/models/user';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  navigationOptions = navigationOptions;
  user = User;
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  isCurrentTabActive(url: string) {
    return this.router.isActive(url, false);
  }
}
