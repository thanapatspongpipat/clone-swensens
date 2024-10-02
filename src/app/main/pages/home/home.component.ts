import { Component } from '@angular/core';
import { ApiService } from '../api-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoggedIn: boolean = false;

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    // Check the login status when the component initializes
    this.isLoggedIn = this._apiService.isLoggedIn();

  }
}
