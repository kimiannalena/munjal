import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import {MatRippleModule} from "@angular/material/core";


@NgModule({
  declarations: [SidenavComponent, FooterComponent, ImpressumComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MatRippleModule
  ],
  exports: [
    SidenavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
