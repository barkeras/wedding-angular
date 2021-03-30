import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BridesmaidsComponent } from './bridesmaids/bridesmaids.component';
import { GroomsmenComponent } from './groomsmen/groomsmen.component';



@NgModule({
  declarations: [BridesmaidsComponent, GroomsmenComponent],
  imports: [
    CommonModule
  ]
})
export class WeddingPartyModule { }
