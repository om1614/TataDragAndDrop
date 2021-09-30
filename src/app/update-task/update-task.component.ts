import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';
import { FetchserviceService } from '../fetchservice.service';



@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  //FormGroup Property Binding
  editFormdata = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    state: new FormControl('')
    
    
  });


  constructor(private router:ActivatedRoute,private fetch:FetchserviceService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.fetch.getcurrentTask(this.router.snapshot.params.id).subscribe(
      (result)=>{
       this.editFormdata = new FormGroup({
          title: new FormControl(result['title']),
          content: new FormControl(result['content']),
          state: new FormControl(result['state'])
        });
      }
    )
  }
  

  collection(){
    this.fetch.updateTask(this.router.snapshot.params.id,this.editFormdata.value).subscribe(
      (result)=>{console.log(result)}
    )
  }
}
