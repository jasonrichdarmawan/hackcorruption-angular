import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-c-t-filter-year',
  standalone: true,
  imports: [
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './c-t-filter-year.component.html',
  styleUrl: './c-t-filter-year.component.scss'
})
export class CTFilterYearComponent implements OnInit {
  isMenuOpened: boolean;
  year: string;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) {
    this.isMenuOpened = false;
    this.year = "";
  }

  private initializeYear(activatedRoute: ActivatedRoute): string {
    const queryParams = activatedRoute.snapshot.queryParams;
    const result = queryParams["year"];
    return result;
  }

  ngOnInit(): void {
    this.year = this.initializeYear(this.activatedRoute);
  }

  onInputBlur(input: HTMLInputElement) {
    if (!input.validity.valid) {
      input.value = "";
      this.year = "";
      return;
    }

    this.year = input.value;
  }

  updateQueryParams(year: string, activatedRoute: ActivatedRoute, router: Router) {
    const currentQueryParams = activatedRoute.snapshot.queryParams;

    let queryParams: Params = {
      ...currentQueryParams,
    }

    if (!year) {
      queryParams["year"] = undefined;
    } else {
      queryParams["year"] = this.year;
    }

    router.navigate(
      [],
      {
        queryParams: queryParams,
        queryParamsHandling: 'merge',
      },
    );
  }
}
