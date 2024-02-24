import { Component } from '@angular/core';
import { CTFiltersComponent } from '../../components/c-t-filters/c-t-filters.component';

@Component({
  selector: 'app-c-t-landing',
  standalone: true,
  imports: [
    CTFiltersComponent,
  ],
  templateUrl: './c-t-landing.page.html',
  styleUrl: './c-t-landing.page.scss'
})
export class CTLandingPage {

}
