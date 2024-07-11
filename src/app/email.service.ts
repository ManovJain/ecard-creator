import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/send-email'; // Backend URL

  constructor(private http: HttpClient) { }

  sendEmail(email: string, imageUrl: string): Observable<any> {
    const emailData = { email, imageUrl };
    return this.http.post<any>(this.apiUrl, emailData);
  }
}
