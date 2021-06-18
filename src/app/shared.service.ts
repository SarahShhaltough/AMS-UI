import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private baseURL = environment.apiUrl;
  private headers: HttpHeaders;
  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTM3NzM2MDMsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTIyNjAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUyMjYwIn0.AmXK-TnUtScwahdIeEH3qJBb0WOTtkF3zH3xTfF3XUk";//localStorage.getItem('token');

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders()
    .set('Authorization', 'bearer ' + this.token)
    .set('Content-Type', 'application/json');
  }

  login(loginData:any){
    let apiUrl: string;
    apiUrl = this.baseURL + "api/Auth/Login";
    return this.http.post(apiUrl, loginData, { headers: this.headers });
  }

  getPatients(roleId){
    let apiUrl: string;
    apiUrl = this.baseURL + "api/users/byRole/" + roleId;
    return this.http.get(apiUrl, { headers: this.headers });
  }

  addVisit(data:any){
    let apiUrl: string;
    apiUrl = this.baseURL + "api/Appointments";
    return this.http.post(apiUrl, data, { headers: this.headers });
  }

  addUser(data){
    let apiUrl: string;
    apiUrl=this.baseURL+"api/Users";
    return this.http.post(apiUrl,data,{headers:this.headers});
  }

  getVisits(patientId){
    let apiUrl: string;
    apiUrl = this.baseURL + "api/Appointments/all/" + patientId;
    return this.http.get(apiUrl, { headers: this.headers });
  }

}
