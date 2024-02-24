import { Component } from '@angular/core';
import { CTFilterYearComponent } from '../c-t-filter-year/c-t-filter-year.component';
import { CTFilterSubjectComponent } from '../c-t-filter-subject/c-t-filter-subject.component';

@Component({
  selector: 'app-c-t-filters',
  standalone: true,
  imports: [
    CTFilterSubjectComponent,
    CTFilterYearComponent,
  ],
  templateUrl: './c-t-filters.component.html',
  styleUrl: './c-t-filters.component.scss'
})
export class CTFiltersComponent {

}
