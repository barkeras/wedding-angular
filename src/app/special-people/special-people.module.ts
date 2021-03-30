import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs/dogs.component';
import { ParentsComponent } from './parents/parents.component';
import { InLovingMemoryComponent } from './in-loving-memory/in-loving-memory.component';



@NgModule({
  declarations: [DogsComponent, ParentsComponent, InLovingMemoryComponent],
  imports: [
    CommonModule
  ]
})
export class SpecialPeopleModule { }
