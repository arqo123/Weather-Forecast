import { ErrorHandlerService } from "./error-handler-service"
import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  constructor(public errorHandler: ErrorHandlerService) {}

  /**
   * Generating link with icon
   * @param {string} icon
   * @returns {string} Icon link
   */
  getIconLink(icon) {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`
  }

  /**
   * Returning day name from date
   * @param {string} dateString
   * @returns {string} Day name
   */
  getDayName(dateString) {
    let date = new Date(dateString)
    return this.days[date.getDay()]
  }

  /**
   * Returning current day name
   * @returns {Promise}  Day name
   */
  getCurrentDayName() {
    let date = new Date()
    return this.days[date.getDay()]
  }

  /**
   * Converting unix time into string
   * @param {number} unix
   * @returns {string} String HH:mm
   */
  getTimeFromDate(unix) {
    let date = new Date(unix * 1000)
    return `${date.getHours()}:${date.getMinutes()}`
  }
}
