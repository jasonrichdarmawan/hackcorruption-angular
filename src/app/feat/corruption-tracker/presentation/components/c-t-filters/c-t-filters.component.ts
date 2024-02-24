import { Component } from '@angular/core';
import { CTFilterYearComponent } from '../c-t-filter-year/c-t-filter-year.component';
import { CTFilterSubjectComponent } from '../c-t-filter-subject/c-t-filter-subject.component';
import { CTFilterTypeSubjectComponent } from '../c-t-filter-type-subject/c-t-filter-type-subject.component';
import { CTFilterNationComponent } from '../c-t-filter-nation/c-t-filter-nation.component';

@Component({
  selector: 'app-c-t-filters',
  standalone: true,
  imports: [
    CTFilterSubjectComponent,
    CTFilterYearComponent,
    CTFilterTypeSubjectComponent,
    CTFilterNationComponent,
  ],
  templateUrl: './c-t-filters.component.html',
  styleUrl: './c-t-filters.component.scss'
})
export class CTFiltersComponent {

}
