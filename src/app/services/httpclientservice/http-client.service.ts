import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  CONTENT_TYPE_X_WWW_URL_FORM_ENCODED = 'application/x-www-form-urlencoded';
    ACCEPT_TYPE_JSON = 'application/json';

    constructor(private httpClient: HttpClient) { }

    callApi(method: string, url: string, body: any = {}): Observable<any> {
        const options:Object = {
            body,
            ...this.httpOptions(
                this.CONTENT_TYPE_X_WWW_URL_FORM_ENCODED,
                this.ACCEPT_TYPE_JSON
            ),
        };
        return this.httpClient.request(method, url, options);
    }

    httpOptions(contentType: string, acceptType: string) {
        const httpHeader: HttpHeaders = new HttpHeaders({
            'Content-typ': contentType,
            accept: acceptType
        });
        return {
            headers: httpHeader
        };
    }

    get(url: any) {
        return this.httpClient.get(url);
    }
}
