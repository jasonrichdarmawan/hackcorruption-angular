import { Component, OnInit, Signal, WritableSignal, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MergeFilterTypeToQueryParamsPipe } from '../../pipes/merge-filter-type-to-query-params/merge-filter-type-to-query-params.pipe';
import { NgTemplateOutlet } from '@angular/common';

export interface FilterType {
  value: FilterTypeValue;
  checked: boolean;
}

export type FilterTypeValue = "All Type" | "Verdict" | "Black List" | "Sanction";

@Component({
  selector: 'app-c-t-filter-type',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterLink,
    MergeFilterTypeToQueryParamsPipe,
    NgTemplateOutlet,
  ],
  templateUrl: './c-t-filter-type.component.html',
  styleUrl: './c-t-filter-type.component.scss'
})
export class CTFilterTypeSubjectComponent implements OnInit {
  isMenuOpened: boolean;
  filters: WritableSignal<FilterType[]>;
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

  private initializeFilters(activatedRoute: ActivatedRoute): WritableSignal<FilterType[]> {
    const filters: WritableSignal<FilterType[]> = signal([
      { value: "Verdict", checked: false, },
      { value: "Black List", checked: false, },
      { value: "Sanction", checked: false, },
    ]);

    const types = activatedRoute.snapshot.queryParamMap.getAll("type");
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

  toggleFilter(filters: WritableSignal<FilterType[]>, nation: string) {
    filters.update(value => {
      const index = value.findIndex(filter => filter.value === nation);
      if (index === -1) { return value; }

      const newValue = [...value];

      const updatedFilter = { ...newValue[index] }
      updatedFilter.checked = !updatedFilter.checked;

      newValue[index] = updatedFilter;

      return newValue;
    });
  }
}
