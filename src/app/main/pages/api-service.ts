import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3333';
  private authTokenKey = 'authToken';
  private userData = 'userData';

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  loginUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, data);
  }

  getProductData(type?: string): Observable<any>{
    const url = `${this.apiUrl}/product/data${type ? `?type=${type}` : ''}`;
    return this.http.get<any>(url);
  }

  getCurrentUserData(): Observable<any> {
    const authToken = this.getAuthToken();

    // Set the request headers with the authentication token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);

    // Make the HTTP GET request to fetch user data
    return this.http.get<any>(`${this.apiUrl}/user/data`, { headers });
  }

  saveAuthToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }

  saveUserData(data: any): void {
    localStorage.setItem(this.userData, JSON.stringify(data));
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  removeAuthToken(): void {
    localStorage.removeItem(this.authTokenKey);
  }

  isLoggedIn(): boolean {
    const authToken = localStorage.getItem('authToken');
    return !!authToken;
  }

  logOut(): void {
    this.removeAuthToken();
  }

}
