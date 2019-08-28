import { WeatherCardComponent } from "./weather-card/weather-card.component"
import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

const routes: Routes = [
  {
    path: "",
    component: WeatherCardComponent,
    children: [
      {
        path: "daily/:city",
        component: WeatherCardComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForecastRoutingModule {}
