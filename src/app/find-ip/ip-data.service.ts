import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IpDataService {

  private REST_API_SERVER = "https://api.ipify.org/?format=json";

  constructor(private httpClient: HttpClient) { }

  public getIpAddress() {
    return this.httpClient.get(this.REST_API_SERVER);
  }

  errorHandler(error: HttpErrorResponse) {
    let errorMessage = "An error has occured...";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "Error: ${error.error.message}";
    } else {
      errorMessage = "${error.status}\n${error.message}";
    }

    return errorMessage;
  }
}
