import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, RouterLink } from '@angular/router';

export type FilterSubject = "All Subject" | "Individual" | "Company";

@Component({
  selector: 'app-c-t-filter-subject',
  standalone: true,
  imports: [
    MatMenuModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './c-t-filter-subject.component.html',
  styleUrl: './c-t-filter-subject.component.scss'
})
export class CTFilterSubjectComponent implements OnInit {
  isMenuOpened: boolean;
  selectedFilter: FilterSubject;
  filters: FilterSubject[];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.isMenuOpened = false;
    this.selectedFilter = "All Subject";
    this.filters = [];
  }

  ngOnInit(): void {
    this.selectedFilter = this.initializeSelectedFilter(this.activatedRoute);
    this.filters = [
      "All Subject",
      "Individual",
      "Company",
    ];
  }

  private initializeSelectedFilter(activatedRoute: ActivatedRoute): FilterSubject {
    const queryParams = activatedRoute.snapshot.queryParams;
    const result = queryParams["subject"];

    if (!result) { return this.selectedFilter; }

    return result as FilterSubject;
  }
}
