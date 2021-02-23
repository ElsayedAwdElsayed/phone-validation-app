import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PhoneServiceService {

  private phoneUrl: string;

  constructor(private http: HttpClient) {
    this.phoneUrl = 'http://localhost:5002/api/phone/list';
  }

  public findAll(): Observable<String[]> {

    return this.http.get<String[]>(this.phoneUrl);
  }

  
}
