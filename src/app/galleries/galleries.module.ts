import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalComponent } from './proposal/proposal.component';
import { EngagementSessionComponent } from './engagement-session/engagement-session.component';



@NgModule({
  declarations: [ProposalComponent, EngagementSessionComponent],
  imports: [
    CommonModule
  ]
})
export class GalleriesModule { }
