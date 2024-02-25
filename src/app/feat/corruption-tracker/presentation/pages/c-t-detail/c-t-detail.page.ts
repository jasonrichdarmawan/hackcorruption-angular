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

  formatDate(date: String): string {
    // Convert month abbreviation to English
    const indonesianMonths = {
      'Jan': 'Januari',
      'Feb': 'Februari',
      'Mar': 'Maret',
      'Apr': 'April',
      'Mei': 'Mei',
      'Jun': 'Juni',
      'Jul': 'Juli',
      'Ags': 'Agustus',
      'Sep': 'September',
      'Okt': 'Oktober',
      'Nov': 'November',
      'Des': 'Desember'
    };

    // Replace Indonesian month abbreviation with English
    const formattedDateString = date.replace(/(\w{3}) (\d{4})/, (_, month: string, year) => {
      const englishMonth: string = indonesianMonths[month];
      return `${englishMonth} ${year}`;
    });

    // Parse the formatted string to a Date object
    const dateObject = new Date(formattedDateString);
    return dateObject.toISOString()
  }
}
