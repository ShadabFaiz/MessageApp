import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigationOptions } from 'src/app/models/navigationOptions';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  navigationOptions = navigationOptions;
  user = {
    name: "Testing User",
    imgUrl: "/assets/images/batman.png",
    quotes: "Some quotes goes here...."
  };
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(url: string) {
    console.log(this.router.isActive("messages", false));

    this.router.navigateByUrl(url);
  }

  isCurrentTabActive(url: string) {
    return this.router.isActive(url, false);
  }
}
