import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-c-t-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './c-t-search-bar.component.html',
  styleUrl: './c-t-search-bar.component.scss'
})
export class CTSearchBarComponent implements OnInit {
  keyword: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
  ) {
    this.keyword = "";
  }

  ngOnInit(): void {
    this.keyword = this.initializeKeyword(this.activatedRoute);
  }

  private initializeKeyword(activatedRoute: ActivatedRoute): string {
    const keyword = activatedRoute.snapshot.queryParamMap.get("keyword");

    if (!keyword) {
      return "";
    }

    return keyword;
  }

  updateQueryParams(keyword: string, router: Router) {
    const queryParams: Params = {
      keyword: keyword,
    }

    router.navigate([], {
      queryParams: queryParams,
      queryParamsHandling: "merge",
    });
  }
}
