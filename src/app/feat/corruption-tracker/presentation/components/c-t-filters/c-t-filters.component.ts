import { Component } from '@angular/core';
import { CTFilterYearComponent } from '../c-t-filter-year/c-t-filter-year.component';

@Component({
  selector: 'app-c-t-filters',
  standalone: true,
  imports: [
    CTFilterYearComponent,
  ],
  templateUrl: './c-t-filters.component.html',
  styleUrl: './c-t-filters.component.scss'
})
export class CTFiltersComponent {

}
