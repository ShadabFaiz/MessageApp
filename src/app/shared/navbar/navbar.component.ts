import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  onTabChange(obj: MatTabChangeEvent) {
    switch (obj.index) {
      case 0:
        return this.navigateTo(`/groups`);
      case 1:
        return this.navigateTo(`/messages`);
      case 2:
        return this.navigateTo(`/videoCalls`);
    }
  }
}
