import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegStuServiceService {

  constructor(private http:HttpClient) { }

  registerStudent(data:any,hostel:any){
    return this.http.post('http://localhost:8084/saveStudent/'+hostel,data);
  }

  getStudent(data:any){
    return this.http.get('http://localhost:8084/getStudent/'+data);
  }

  changePassword(data:any,rollnumber:any){
    return this.http.put('http://localhost:8084/changePasswordOfStudent/'+rollnumber,data);
  }
}
