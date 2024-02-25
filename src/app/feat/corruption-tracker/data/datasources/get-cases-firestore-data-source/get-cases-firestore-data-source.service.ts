import { Injectable } from '@angular/core';
import { FilterSubjectTypeValue } from '../../../presentation/components/c-t-filter-subject-type/c-t-filter-subject-type.component';
import { FilterTypeValue } from '../../../presentation/components/c-t-filter-type/c-t-filter-type.component';
import { FilterNationValue } from '../../../presentation/components/c-t-filter-nation/c-t-filter-nation.component';
import { Observable, map, of } from 'rxjs';
import { DocumentData, Firestore, Query, collection, collectionData, limit, query, where } from '@angular/fire/firestore';

export interface GetCasesFirestoreDataSourceParams {
  keyword?: string;
  filterSubjectType?: FilterSubjectTypeValue | FilterSubjectTypeValue[];
  filterType?: FilterTypeValue | FilterTypeValue[];
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

    let queryRef: Query<DocumentData, DocumentData> = query(casesCollection, limit(10));

    if (params.keyword) {
      queryRef = query(casesCollection, where('subject', '==', params.keyword));
    }

    if (params.filterSubjectType && params.filterSubjectType.length > 0) {
      if (Array.isArray(params.filterSubjectType)) {
        queryRef = query(queryRef, where('subject_type', 'in', params.filterSubjectType));
      } else {
        queryRef = query(queryRef, where('subject_type', '==', params.filterSubjectType));
      }
    }

    if (params.filterType && params.filterType.length > 0) {
      if (Array.isArray(params.filterType)) {
        queryRef = query(queryRef, where('type', 'in', params.filterType));
      } else {
        queryRef = query(queryRef, where('type', '==', params.filterType));
      }
    }

    if (params.filterFrom) {
      queryRef = query(queryRef, where('year', '>=', params.filterFrom));
    }

    if (params.filterTo) {
      queryRef = query(queryRef, where('year', '<=', params.filterTo));
    }

    if (params.filterNation && params.filterNation.length > 0) {
      if (Array.isArray(params.filterNation)) {
        queryRef = query(queryRef, where('nation', 'in', params.filterNation));
      } else {
        queryRef = query(queryRef, where('nation', '==', params.filterNation));
      }
    }

    const result = (collectionData(queryRef, { idField: 'id' }) as Observable<GetCasesFirestoreDataSourceModel[]>);

    return result;
  }
}
