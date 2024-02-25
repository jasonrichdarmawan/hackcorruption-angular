import { Injectable } from "@angular/core";
import { Firestore, DocumentData, Query, collection, doc, query, docData, DocumentReference } from "@angular/fire/firestore";
import { Observable } from "rxjs";

export interface GetCaseFirestoreParams {
  id: string;
}

export interface GetCaseFirestoreDataSourceModel {
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
export class GetCaseFirestoreDataSourceService {
  constructor(private firestore: Firestore) { }
  
  get(params: GetCaseFirestoreParams): Observable<GetCaseFirestoreDataSourceModel> {
    const caseRef = doc(this.firestore, `cases/${params.id}`);
    const result = (docData(caseRef) as Observable<GetCaseFirestoreDataSourceModel>);
    return result;
  }
}