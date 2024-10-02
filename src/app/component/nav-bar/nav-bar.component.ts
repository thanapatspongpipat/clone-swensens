import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/main/pages/api-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(100%)' })),
      transition('in => out', animate('300ms ease-out')),
      transition('out => in', animate('300ms ease-in')),
    ]),
  ],
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean = false;
  showAside: boolean = false;
  user: any

  constructor(private _apiService: ApiService, private _router: Router) {

  }

  initData(): void{
    this.isLoggedIn = this._apiService.isLoggedIn();
    if(this.isLoggedIn){
      console.log('testLoggedIn');
      this.getCurrentUserData();
    }
  }

  ngOnInit(): void {
    this.initData();
  }

  toggleAside(): void {
    this.showAside = !this.showAside;
  }



  logout(): void {
    this._apiService.logOut();
    this._router.navigateByUrl('login').then(() => {
      location.reload();
    });
  }

  getCurrentUserData(): any {
    this._apiService.getCurrentUserData().subscribe(res => {
      console.log(res.user);
      this.user = res.user
    });
  }

  // clickOutSide(event: Event): void {
  //   console.log(event);
  //   this.showAside = false;
  // }
}
