import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"hackcorruption-stg","appId":"1:120065507426:web:a82bf23d5209aa2f54113b","storageBucket":"hackcorruption-stg.appspot.com","apiKey":"AIzaSyD6qrf4e5g7RIfOvLiBF3EhjZQMl970lzc","authDomain":"hackcorruption-stg.firebaseapp.com","messagingSenderId":"120065507426"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
