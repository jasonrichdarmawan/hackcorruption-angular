import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilterNationValue } from '../c-t-filter-nation/c-t-filter-nation.component';
import { FilterSubjectType, FilterSubjectTypeValue } from '../c-t-filter-subject-type/c-t-filter-subject-type.component';
import { FilterTypeValue } from '../c-t-filter-type/c-t-filter-type.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatTableModule } from '@angular/material/table';

export interface CaseModel {
  subject: string;
  subject_type: "Individual" | "Company";
  person_in_charge: string;
  year: number;
  type: string;
  decision_number: string;
  nation: string;
  source: string;
  link: string;
  summary: string;
  punishment_duration: string;
  beneficiary_ownership: string;
}

@Component({
  selector: 'app-c-t-table',
  standalone: true,
  imports: [
    MatTableModule,
  ],
  templateUrl: './c-t-table.component.html',
  styleUrl: './c-t-table.component.scss'
})
export class CTTableComponent implements OnInit, OnDestroy {
  subscriptions: Subscription;

  keyword: string;
  filterSubjectType: FilterSubjectTypeValue;
  filterType: FilterTypeValue;
  filterFrom: string;
  filterTo: string;
  filterNation: FilterNationValue;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.subscriptions = new Subscription();

    this.keyword = "";
    this.filterSubjectType = "All Subject Type";
    this.filterType = "All Type";
    this.filterFrom = "";
    this.filterTo = "";
    this.filterNation = "All Nation";
  }

  ngOnInit(): void {
    const keywordSubscription = this.initializeKeywordSubscription(this.activatedRoute);
    this.subscriptions.add(keywordSubscription);
    const filterSubjectSubscription = this.initializeFilterSubjectSubscription(this.activatedRoute);
    this.subscriptions.add(filterSubjectSubscription);
    const filterTypeSubjectSubscription = this.initializeFilterTypeSubscription(this.activatedRoute);
    this.subscriptions.add(filterTypeSubjectSubscription);
    const filterFromSubscription = this.initializeFilterFromSubscription(this.activatedRoute);
    this.subscriptions.add(filterFromSubscription);
    const filterToSubscription = this.initializeFilterToSubscription(this.activatedRoute);
    this.subscriptions.add(filterToSubscription);
    const filterNationSubscription = this.initializeFilterNationSubscription(this.activatedRoute);
    this.subscriptions.add(filterNationSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initializeKeywordSubscription(activatedRoute: ActivatedRoute) {
    const subscription = activatedRoute.queryParams.subscribe(queryParams => {
      this.keyword = queryParams["keyword"];
    });
    return subscription;
  }
  
  private initializeFilterSubjectSubscription(activatedRoute: ActivatedRoute) {
    const subscription = activatedRoute.queryParams.subscribe(queryParams => {
      this.filterSubjectType = queryParams["subjectType"];
    });
    return subscription;
  }

  private initializeFilterTypeSubscription(activatedRoute: ActivatedRoute) {
    const subscription = activatedRoute.queryParams.subscribe(queryParams => {
      this.filterType = queryParams["type"];
    })
    return subscription;
  }

  private initializeFilterFromSubscription(activatedRoute: ActivatedRoute) {
    const subscription = activatedRoute.queryParams.subscribe(queryParams => {
      this.filterFrom = queryParams["from"];
    })
    return subscription;
  }

  private initializeFilterToSubscription(activatedRoute: ActivatedRoute) {
    const subscription = activatedRoute.queryParams.subscribe(queryParams => {
      this.filterTo = queryParams["to"];
    })
    return subscription;
  }

  private initializeFilterNationSubscription(activatedRoute: ActivatedRoute) {
    const subscription = activatedRoute.queryParams.subscribe(queryParams => {
      this.filterNation = queryParams["nation"];
    })
    return subscription;
  }
}
