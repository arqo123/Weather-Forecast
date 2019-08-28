import { WeatherForecast } from "./../../../../models/weather-forecast.model"
import { Component, Input } from "@angular/core"

@Component({
  selector: "detailed-icon",
  templateUrl: "./detailed-icon.component.html",
  styleUrls: ["./detailed-icon.component.scss"],
})
export class DetailedIconComponent {
  @Input() unit: string
  @Input() data: WeatherForecast
  @Input() icon: string
  @Input() label: string

  constructor() {}

  /**
   * Returning icon link
   */
  getIcon() {
    return `assets/${this.icon}-icon.png`
  }
}
