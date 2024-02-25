import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilterNationValue } from '../c-t-filter-nation/c-t-filter-nation.component';
import { FilterSubject } from '../c-t-filter-subject/c-t-filter-subject.component';
import { FilterTypeSubject } from '../c-t-filter-type-subject/c-t-filter-type-subject.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-c-t-table',
  standalone: true,
  imports: [],
  templateUrl: './c-t-table.component.html',
  styleUrl: './c-t-table.component.scss'
})
export class CTTableComponent implements OnInit, OnDestroy {
  subscriptions: Subscription;

  filterSubject: FilterSubject;
  filterTypeSubject: FilterTypeSubject;
  filterYear: string;
  filterNation: FilterNationValue;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.subscriptions = new Subscription();

    this.filterSubject = "All Subject";
    this.filterTypeSubject = "All Type Subject";
    this.filterYear = "";
    this.filterNation = "All Nation";
  }

  ngOnInit(): void {
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
  
  private initializeFilterSubjectSubscription(activatedRoute: ActivatedRoute) {
    const subscription = activatedRoute.queryParams.subscribe(queryParams => {
      this.filterSubject = queryParams["subject"];
    });
    return subscription;
  }

  private initializeFilterTypeSubjectSubscription(activatedRoute: ActivatedRoute) {
    const subscription = activatedRoute.queryParams.subscribe(queryParams => {
      this.filterTypeSubject = queryParams["typeSubject"];
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
