import { Component, OnInit, NgZone } from "@angular/core";

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.css"]
})
export class SideNavComponent implements OnInit {
   mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);


  constructor(
    zone: NgZone) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)));



  }


  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
  ngOnInit() {}
}
