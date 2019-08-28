import { AppComponent } from "./app.component"
import { LocationSelectComponent } from "./location-select/location-select.component"
import { NgModule } from "@angular/core"
import { Routes, RouterModule, ExtraOptions } from "@angular/router"

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "forecast",
        loadChildren: "./forecast/forecast.module#ForecastModule",
      },
      { path: "", component: LocationSelectComponent },
    ],
  },

  { path: "**", redirectTo: "" },
]

const config: ExtraOptions = {
  useHash: true,
   paramsInheritanceStrategy: 'always' 
}

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
