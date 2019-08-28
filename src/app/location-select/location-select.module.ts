import { FlexLayoutModule } from "@angular/flex-layout"
import { LocationService } from "./../services/location-service"
import {
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
} from "@angular/material"
import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { LocationSelectComponent } from "./location-select.component"
import { FormsModule } from "@angular/forms"
import { WeatherService } from "../services/weather-service"

const COMPONENTS = [LocationSelectComponent]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
  ],
  exports: [...COMPONENTS],
  providers: [LocationService, WeatherService],
})
export class LocationSelectModule {}
