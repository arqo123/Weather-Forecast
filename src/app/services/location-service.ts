import { environment } from "../../environments/environment"
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { ErrorHandlerService } from "./error-handler-service"
@Injectable()
export class LocationService {
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) {}

  /**
   * Returning current coordinates
   * @returns {Promise} Coordinates
   */
  getLocation(): Promise<any> {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, err => {
        this.errorHandler.showError(err.message)
      })
    })
  }

  /**
   * Returning current coordinates
   * @param {object} coordinates
   * @returns {Promise} City name depending on coordinates
   */
  getCityNameByCoordinates(coordinates): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${environment.geocodingApiAddress}reverse?format=jsonv2&lat=${coordinates.latitude}&lon=${coordinates.longitude}`)
        .toPromise()
        .then(
          res => {
            resolve(res["address"].city)
          },
          err => {
            this.errorHandler.showError("Cant get city name from coordinates")
          },
        )
    })
  }
}
