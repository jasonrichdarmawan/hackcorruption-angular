import { Component } from '@angular/core';
import { CTFiltersComponent } from '../../components/c-t-filters/c-t-filters.component';
import { CTSearchBarComponent } from '../../components/c-t-search-bar/c-t-search-bar.component';
import { CTTableComponent } from '../../components/c-t-table/c-t-table.component';

@Component({
  selector: 'app-c-t-landing',
  standalone: true,
  imports: [
    CTSearchBarComponent,
    CTFiltersComponent,
    CTTableComponent,
  ],
  templateUrl: './c-t-landing.page.html',
  styleUrl: './c-t-landing.page.scss'
})
export class CTLandingPage {

}
