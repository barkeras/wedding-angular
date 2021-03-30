import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations/locations.component';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { RegistryComponent } from './registry/registry.component';



@NgModule({
  declarations: [LocationsComponent, AccommodationsComponent, RegistryComponent],
  imports: [
    CommonModule
  ]
})
export class DetailsModule { }
