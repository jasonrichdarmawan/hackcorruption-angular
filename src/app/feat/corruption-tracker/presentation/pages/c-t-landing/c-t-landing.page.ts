import { Component } from '@angular/core';
import { CTHeaderComponent } from '../../components/c-t-header/c-t-header.component';
import { CTFooterComponent } from '../../components/c-t-footer/c-t-footer.component';

@Component({
  selector: 'app-c-t-landing',
  standalone: true,
  imports: [
    CTHeaderComponent,
    CTFooterComponent
  ],
  templateUrl: './c-t-landing.page.html',
  styleUrl: './c-t-landing.page.scss'
})
export class CTLandingPage {

}
