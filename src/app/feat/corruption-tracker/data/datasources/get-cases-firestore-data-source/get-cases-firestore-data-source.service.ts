import { Injectable } from '@angular/core';
import { FilterSubjectTypeValue } from '../../../presentation/components/c-t-filter-subject-type/c-t-filter-subject-type.component';
import { FilterTypeValue } from '../../../presentation/components/c-t-filter-type/c-t-filter-type.component';
import { FilterNationValue } from '../../../presentation/components/c-t-filter-nation/c-t-filter-nation.component';
import { Observable, map, of } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

export interface GetCasesFirestoreDataSourceParams {
  keyword?: string;
  filterSubjectType?: FilterSubjectTypeValue;
  filterType?: FilterTypeValue;
  filterFrom?: string;
  filterTo?: string;
  filterNation?: FilterNationValue;
}

export interface GetCasesFirestoreDataSourceModel {
  id: string;
  subject?: string;
  subject_type?: string;
  person_in_charge?: string;
  year?: string;
  type?: string;
  decision_number?: string;
  nation?: string;
  source?: string;
  link?: string;
  summary?: string;
  punishment_duration?: string;
  beneficiary_ownership?: string;
}

@Injectable()
export class GetCasesFirestoreDataSourceService {

  constructor(
    private firestore: Firestore,
  ) { }

  get(params: GetCasesFirestoreDataSourceParams): Observable<GetCasesFirestoreDataSourceModel[]> {
    const casesCollection = collection(this.firestore, 'cases');

    const result = (collectionData(casesCollection, { idField: 'id' }) as Observable<GetCasesFirestoreDataSourceModel[]>);

    return result;
  }
}
