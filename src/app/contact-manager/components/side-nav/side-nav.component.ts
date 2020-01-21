import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { UserService } from "../../service/_user/user.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../../models/_user/user";
import { MatSidenav } from "@angular/material";
import { FormsModule } from "@angular/forms";

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.css"]
})
export class SideNavComponent implements OnInit {
  mediaMatcher: MediaQueryList = matchMedia(
    `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
  );

  users: Observable<User[]>;
  isDarkTheme: boolean = false;
  dir: string = "ltr";

  constructor(
    zone: NgZone,
    private userService: UserService,
    private router: Router
  ) {
    this.mediaMatcher.addListener(mql =>
      zone.run(
        () =>
          (this.mediaMatcher = matchMedia(
            `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
          ))
      )
    );
  }


  @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir() {
    this.dir = this.dir == "ltr" ? "rtl" : "ltr";
    this.sidenav.toggle().then(() => this.sidenav.toggle());
  }
  
  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();

    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) this.sidenav.close();
    });
  }
}
