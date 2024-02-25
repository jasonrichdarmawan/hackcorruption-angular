import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilterNationValue } from '../c-t-filter-nation/c-t-filter-nation.component';
import { FilterSubjectType } from '../c-t-filter-subject-type/c-t-filter-subject-type.component';
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
  filterSubjectType: FilterSubjectType;
  filterType: FilterTypeValue;
  filterYear: string;
  filterNation: FilterNationValue;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.subscriptions = new Subscription();

    this.keyword = "";
    this.filterSubjectType = "All Subject Type";
    this.filterType = "All Type";
    this.filterYear = "";
    this.filterNation = "All Nation";
  }

  ngOnInit(): void {
    const keywordSubscription = this.initializeKeywordSubscription(this.activatedRoute);
    this.subscriptions.add(keywordSubscription);
    const filterSubjectSubscription = this.initializeFilterSubjectSubscription(this.activatedRoute);
    this.subscriptions.add(filterSubjectSubscription);
    const filterTypeSubjectSubscription = this.initializeFilterTypeSubjectSubscription(this.activatedRoute);
    this.subscriptions.add(filterTypeSubjectSubscription);
    const filterYearSubscription = this.initializeFilterYearSubscription(this.activatedRoute);
    this.subscriptions.add(filterYearSubscription);
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

  private initializeFilterTypeSubjectSubscription(activatedRoute: ActivatedRoute) {
    const subscription = activatedRoute.queryParams.subscribe(queryParams => {
      this.filterType = queryParams["typeSubject"];
    })
    return subscription;
  }

  private initializeFilterYearSubscription(activatedRoute: ActivatedRoute) {
    const subscription = activatedRoute.queryParams.subscribe(queryParams => {
      this.filterYear = queryParams["year"];
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
