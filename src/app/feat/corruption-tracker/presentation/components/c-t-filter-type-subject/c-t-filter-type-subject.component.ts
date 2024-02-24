import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, RouterLink } from '@angular/router';

export type FilterTypeSubject = "All Type Subject" | "Verdict" | "Black List" | "Sanction";

@Component({
  selector: 'app-c-t-filter-type',
  standalone: true,
  imports: [
    MatMenuModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './c-t-filter-type-subject.component.html',
  styleUrl: './c-t-filter-type-subject.component.scss'
})
export class CTFilterTypeSubjectComponent implements OnInit {
  isMenuOpened: boolean;
  selectedFilter: FilterTypeSubject;
  filters: FilterTypeSubject[];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.isMenuOpened = false;
    this.selectedFilter = "All Type Subject";
    this.filters = [];
  }

  ngOnInit(): void {
    this.selectedFilter = this.initializeSelectedFilter(this.activatedRoute);
    this.filters = [
      "All Type Subject",
      "Black List",
      "Sanction",
      "Verdict",
    ]
  }

  private initializeSelectedFilter(activatedRoute: ActivatedRoute): FilterTypeSubject {
    const queryParams = activatedRoute.snapshot.queryParams;
    const result = queryParams["typeSubject"];

    if (!result) { return this.selectedFilter; }

    return result as FilterTypeSubject;
  }
}
