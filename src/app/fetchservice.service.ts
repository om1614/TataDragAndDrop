import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Todo } from './todo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchserviceService {
link =" http://localhost:3000/categories/"

 
constructor(private http: HttpClient) { }


getNotes():Observable<Todo[]>{
  return this.http.get<Todo[]>(this.link )
}
 



AddTask(todo:Todo):Observable<Todo>{
     return this.http.post<Todo>(this.link,todo)
}


getcurrentTask(id){
      return this.http.get(`${this.link}/${id}`)
}

updateTask(id,data){
  return this.http.put(`${this.link}/${id}`,data)
}



  filter(tab,categories){
   return tab.filter(
       (todo)=>{
      return todo.state === categories;
     }
   );
 }
}
