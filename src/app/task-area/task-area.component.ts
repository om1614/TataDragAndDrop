import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';
 import { Todo } from '../todo';
import { FetchserviceService } from '../fetchservice.service';
import { filter } from 'rxjs/operators';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-area',
  templateUrl: './task-area.component.html',
  styleUrls: ['./task-area.component.css']
})
export class TaskAreaComponent implements OnInit {


  todos: Todo[]=[];
  doing: Todo[]=[];
  done: Todo[]=[];
 
  //FormGroup Property Binding
  addFormdata = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
    
  });

  constructor(private fetch:FetchserviceService) { }

  ngOnInit(): void {
  this.fetch.getNotes().subscribe(
    (todos)=>{
      this.todos = this.fetch.filter(todos,'todo');
      this.doing = this.fetch.filter(todos,'doing');
      this.done = this.fetch.filter(todos,'done');
    }
    
  )
      
  
  }
   
  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

     const todo = event.item.data;
     todo.state = event.container.element.nativeElement.classList[0];
    
     
    }
  }

    //---------collect form data------------- 
    CollectFormdata(){
     // console.log(this.addFormdata.value)
     this.fetch.AddTask(this.addFormdata.value).subscribe(
       (result)=>{
         this.todos.push(result);
         this.addFormdata.reset({});
       }
     )
    }
     
    

}
 

function categories(todos: any, categories: any, arg2: string): Todo[] {
  throw new Error('Function not implemented.');
}


