import { Component, OnInit, Signal, WritableSignal, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MergeFilterNationToQueryParamsPipe } from '../../pipes/merge-filter-nation-to-query-params.pipe';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';

export interface FilterNation {
  value: FilterNationValue;
  checked: boolean;
}

export type FilterNationValue = "Indonesia" | "Singapore" | "Malaysia";

@Component({
  selector: 'app-c-t-filter-nation',
  standalone: true,
  imports: [
    MatMenuModule,
    NgTemplateOutlet,
    MatIconModule,
    MergeFilterNationToQueryParamsPipe,
    RouterLink,
  ],
  templateUrl: './c-t-filter-nation.component.html',
  styleUrl: './c-t-filter-nation.component.scss'
})
export class CTFilterNationComponent implements OnInit {
  isMenuOpened: boolean;
  filters: WritableSignal<FilterNation[]>;
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

  private initializeFilters(
    activatedRoute: ActivatedRoute,
  ): WritableSignal<FilterNation[]> {
    const filters: WritableSignal<FilterNation[]> = signal([
      { value: "Indonesia", checked: false, },
      { value: "Singapore", checked: false, },
      { value: "Malaysia", checked: false, },
    ]);

    const types = activatedRoute.snapshot.queryParamMap.getAll("nation");
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

  toggleFilter(filters: WritableSignal<FilterNation[]>, nation: string) {
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
