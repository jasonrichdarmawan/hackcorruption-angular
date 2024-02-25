import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

interface FromTo {
  from?: string;
  to?: string;
}

export type FromToType = "from" | "to";

@Component({
  selector: 'app-c-t-filter-year',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './c-t-filter-year.component.html',
  styleUrl: './c-t-filter-year.component.scss'
})
export class CTFilterYearComponent implements OnInit {
  isMenuOpened: boolean;
  fromTo: FromTo;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) {
    this.isMenuOpened = false;
    this.fromTo = {};
  }

  private initializeYear(activatedRoute: ActivatedRoute): FromTo {
    const queryParams = activatedRoute.snapshot.queryParams;
    const from = queryParams["from"];
    const to = queryParams["to"];

    const result: FromTo = {
      from: from,
      to: to,
    };

    return result;
  }

  ngOnInit(): void {
    this.fromTo = this.initializeYear(this.activatedRoute);
  }

  onInputBlur(input: HTMLInputElement, type: FromToType) {
    switch (type) {
      case "from":
        if (!input.validity.valid) {
          input.value = "";
          this.fromTo.from = undefined;
          return;
        }
      
        this.fromTo.from = input.value;
        return;
      case "to":
        if (!input.validity.valid) {
          input.value = "";
          this.fromTo.to = undefined;
          return;
        }

        this.fromTo.to = input.value;
        return;
    }
  }

  updateQueryParams(fromTo: FromTo, activatedRoute: ActivatedRoute, router: Router) {
    const currentQueryParams = activatedRoute.snapshot.queryParams;

    let queryParams: Params = {
      ...currentQueryParams,
    }

    if (fromTo.from) {
      queryParams['from'] = fromTo.from;
    } else {
      queryParams['from'] = undefined;
    }

    if (fromTo.to) {
      queryParams['to'] = fromTo.to;
    } else {
      queryParams['to'] = undefined;
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
