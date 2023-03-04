import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from '../httpclientservice/http-client.service';
import { ApiConstant } from '../../constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

  constructor( private httpSrv: HttpClientService ) { }

  getZones(): Observable<any> {
    return this.httpSrv.callApi('GET', ApiConstant.GetTimeZone.URL);
  }

  getTimeZones(data: any): Observable<any> {
    return this.httpSrv.callApi('GET', ApiConstant.GetTimeZone.URL + '/' + data);
  }
}
