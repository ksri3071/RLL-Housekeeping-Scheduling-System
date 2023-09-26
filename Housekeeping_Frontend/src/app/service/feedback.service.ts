import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { 
  }

  submitFeedback(data:any,request_id:any){
   return  this.http.post('http://localhost:8084/submitFeedback/'+request_id,data);
  }

  getFeedbackCount(data:any){
    return this.http.get('http://localhost:8084/getFeedbackCount/'+data);
  }

  getFeedbackCountByRollnumber(data:any){
    return this.http.get('http://localhost:8084/getFeedbackCountByRollnumber/'+data);
  }

  getAllFeedbackByHostel(data:any){
    return this.http.get('http://localhost:8084/getAllFeedbackByHostel/'+data);
  }
}
