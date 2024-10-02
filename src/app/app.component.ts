import { Component, OnInit, ElementRef} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';
  isHideFooter = true;
  constructor(
  ) {
  }

  ngOnInit(): void {

  }

}
