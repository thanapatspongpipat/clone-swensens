import { CommonModule, NgClass} from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/component/footer/footer.component';
import { NavBarComponent } from 'src/app/component/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // or NoopAnimationsModule
import { ClickOutsideModule } from 'ng-click-outside';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';



@NgModule({
  declarations: [NavBarComponent, FooterComponent, MenuSidebarComponent],
  imports: [RouterModule, CommonModule, NgClass, BrowserAnimationsModule, ClickOutsideModule],
  exports: [NavBarComponent, FooterComponent],
})
export class ComponentModule { }
