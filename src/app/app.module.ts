import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule,Routes} from '@angular/router'



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskAreaComponent } from './task-area/task-area.component';
import { UpdateTaskComponent } from './update-task/update-task.component';


const custom_routes:Routes=[
  {path:'', component:TaskAreaComponent},
  {path:'update/:id', component:UpdateTaskComponent}
]





@NgModule({
  declarations: [
    AppComponent,
    TaskAreaComponent,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(custom_routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
