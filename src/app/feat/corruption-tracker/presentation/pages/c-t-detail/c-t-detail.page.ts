import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { GetCaseFirestoreDataSourceModel, GetCaseFirestoreDataSourceService } from '../../../../services/get-case-firestore-data-source-service';
import { AsyncPipe } from '@angular/common';
import { CTHeaderComponent } from '../../components/c-t-header/c-t-header.component';
import { CTFooterComponent } from '../../components/c-t-footer/c-t-footer.component';

@Component({
  selector: 'app-c-t-detail',
  standalone: true,
  imports: [
    CTHeaderComponent,
    CTFooterComponent,
    MatCardModule,
    MatButtonModule,
    AsyncPipe
  ],
  providers: [
    GetCaseFirestoreDataSourceService
  ],
  templateUrl: './c-t-detail.page.html',
  styleUrl: './c-t-detail.page.scss'
})
export class CTDetailPage implements OnInit {
  id: string = "";
  dataSource$: Observable<GetCaseFirestoreDataSourceModel>;

  constructor(private route: ActivatedRoute, private service: GetCaseFirestoreDataSourceService) {
    this.dataSource$ = new Observable();
  }

  private initializeGetCasesSubscription(activatedRoute: ActivatedRoute, getCases: GetCaseFirestoreDataSourceService) {
    const subscription = activatedRoute.queryParams.subscribe(_ => {
      this.dataSource$ = getCases.get({
        id: this.id
      })
    })
    return subscription;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') ?? ""
    })
    this.initializeGetCasesSubscription(this.route, this.service);
  }

  toTitleCase(text: string): string {
    return text.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  formatDate(dateRangeString: String): string {
    const indonesianMonths: { [key: string]: string } = {
      'Jan': 'Jan',
      'Feb': 'Feb',
      'Mar': 'Mar',
      'Apr': 'Apr',
      'Mei': 'May',
      'Jun': 'Jun',
      'Jul': 'Jul',
      'Ags': 'Aug',
      'Sep': 'Sep',
      'Okt': 'Oct',
      'Nov': 'Nov',
      'Des': 'Dec'
    };
    
    const formattedDateRange: string = dateRangeString.replace(/(\d{1,2} \w{3} \d{4}) s\/d (\d{1,2} \w{3} \d{4})/, (match, startDate, endDate) => {
      const formatDateString = (dateString: string) => {
        const [day, month, year] = dateString.split(' ');
        const englishMonth = indonesianMonths[month];
        return `${day} ${englishMonth} ${year}`;
      };
    
      const formattedStartDate = formatDateString(startDate);
      const formattedEndDate = formatDateString(endDate);
    
      return `${formattedStartDate} - ${formattedEndDate}`;
    });
    
    return formattedDateRange;
  }
}
