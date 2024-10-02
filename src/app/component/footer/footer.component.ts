import { Component } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(){
    library.add(faFacebook, faInstagram, faYoutube)
  }

}
