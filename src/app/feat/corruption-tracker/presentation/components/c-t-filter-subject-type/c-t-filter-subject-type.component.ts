import { Component, OnInit, Signal, WritableSignal, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MergeFilterSubjectTypeToQueryParamsPipe } from '../../pipes/merge-filter-subject-type-to-query-params/merge-filter-subject-type-to-query-params.pipe';
import { NgTemplateOutlet } from '@angular/common';

export interface FilterSubjectType {
  value: FilterSubjectTypeValue;
  checked: boolean;
}

export type FilterSubjectTypeValue = "All Subject Type" | "individual" | "company";

@Component({
  selector: 'app-c-t-filter-subject-type',
  standalone: true,
  imports: [
    MatButtonModule,
    NgTemplateOutlet,
    MatMenuModule,
    MatIconModule,
    RouterLink,
    MergeFilterSubjectTypeToQueryParamsPipe,
  ],
  templateUrl: './c-t-filter-subject-type.component.html',
  styleUrl: './c-t-filter-subject-type.component.scss'
})
export class CTFilterSubjectComponent implements OnInit {
  isMenuOpened: boolean;
  filters: WritableSignal<FilterSubjectType[]>;
  checkedFiltersLength: Signal<number>;
  formatFirstCheckedFilter: Signal<string>;

  constructor(
    public activatedRoute: ActivatedRoute,
  ) {
    this.isMenuOpened = false;
    this.filters = signal([]);
    this.checkedFiltersLength = computed(() => 0);
    this.formatFirstCheckedFilter = computed(() => "");
  }

  ngOnInit(): void {
    this.filters = this.initializeFilters(this.activatedRoute);
    this.checkedFiltersLength = computed(() => this.filters().filter(filter => filter.checked).length);
    this.formatFirstCheckedFilter = computed(() => this.filters().find(filter => filter.checked)?.value ?? "");
  }

  private initializeFilters(activatedRoute: ActivatedRoute): WritableSignal<FilterSubjectType[]> {
    const filters: WritableSignal<FilterSubjectType[]> = signal([
      { value: "individual", checked: false, },
      { value: "company", checked: false, },
    ]);

    const types = activatedRoute.snapshot.queryParamMap.getAll("subjectType");
    if (types.length === 0) { return filters; }

    filters.update(value => {
      const newValue = [...value];

      newValue.forEach(filter => {
        filter.checked = types.includes(filter.value);
      })

      return newValue;
    })

    return filters;
  }

  toggleFilter(filters: WritableSignal<FilterSubjectType[]>, subjectType: string) {
    filters.update(value => {
      const index = value.findIndex(filter => filter.value === subjectType);
      if (index === -1) { return value; }

      const newValue = [...value];

      const updatedFilter = { ...newValue[index] }
      updatedFilter.checked = !updatedFilter.checked;

      newValue[index] = updatedFilter;

      return newValue;
    });
  }
}
