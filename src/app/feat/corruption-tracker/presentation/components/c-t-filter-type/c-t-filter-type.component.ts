import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, RouterLink } from '@angular/router';

export type FilterType = "All Type" | "Verdict" | "Black List" | "Sanction";

@Component({
  selector: 'app-c-t-filter-type',
  standalone: true,
  imports: [
    MatMenuModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './c-t-filter-type.component.html',
  styleUrl: './c-t-filter-type.component.scss'
})
export class CTFilterTypeComponent implements OnInit {
  isMenuOpened: boolean;
  selectedFilter: FilterType;
  filters: FilterType[];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.isMenuOpened = false;
    this.selectedFilter = "All Type";
    this.filters = [];
  }

  ngOnInit(): void {
    this.selectedFilter = this.initializeSelectedFilter(this.activatedRoute);
    this.filters = [
      "All Type",
      "Black List",
      "Sanction",
      "Verdict",
    ]
  }

  private initializeSelectedFilter(activatedRoute: ActivatedRoute): FilterType {
    const queryParams = activatedRoute.snapshot.queryParams;
    const result = queryParams["type"];

    if (!result) { return this.selectedFilter; }

    return result as FilterType;
  }
}
