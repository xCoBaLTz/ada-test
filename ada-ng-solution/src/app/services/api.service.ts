import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl: string = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {
  }

  public getNodes(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/nodes`);
  }

  public getNodeById(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/nodes/${id}`);
  }

  public getNodesBySearchTerm(search: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/nodes/search`, {query: search});
  }
}

