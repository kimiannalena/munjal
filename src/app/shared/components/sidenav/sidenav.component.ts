import { Component, OnInit, Input } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  themeColor: 'primary' | 'accent' | 'warn' = 'primary'; // ? notice this
  isDark = false; // ? notice this
  private innerWidth: number;
  public opened: boolean;
  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.opened = false;
  }

  // ? notice below
  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.overlayContainer
        .getContainerElement()
        .classList.add('dark-theme');
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.remove('dark-theme');
    }
  }

  get showSidebarMenu() {
    return this.innerWidth <= 400;
  }

  onResize(event) {
    this.innerWidth = event.target.innerWidth;
  }
}

