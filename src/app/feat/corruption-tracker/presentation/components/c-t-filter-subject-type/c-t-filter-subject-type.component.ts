import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, RouterLink } from '@angular/router';

export type FilterSubjectType = "All Subject Type" | "Individual" | "Company";

@Component({
  selector: 'app-c-t-filter-subject-type',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './c-t-filter-subject-type.component.html',
  styleUrl: './c-t-filter-subject-type.component.scss'
})
export class CTFilterSubjectComponent implements OnInit {
  isMenuOpened: boolean;
  selectedFilter: FilterSubjectType;
  filters: FilterSubjectType[];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.isMenuOpened = false;
    this.selectedFilter = "All Subject Type";
    this.filters = [];
  }

  ngOnInit(): void {
    this.selectedFilter = this.initializeSelectedFilter(this.activatedRoute);
    this.filters = [
      "All Subject Type",
      "Individual",
      "Company",
    ];
  }

  private initializeSelectedFilter(activatedRoute: ActivatedRoute): FilterSubjectType {
    const queryParams = activatedRoute.snapshot.queryParams;
    const result = queryParams["subjectType"];

    if (!result) { return this.selectedFilter; }

    return result as FilterSubjectType;
  }
}
