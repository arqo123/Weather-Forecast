import { environment } from "../../environments/environment"
import { HttpClient } from "@angular/common/http"
import { MatSnackBar, MatSnackBarConfig } from "@angular/material"
import { Injectable } from "@angular/core"

@Injectable()
export class ErrorHandlerService {
  constructor(public snackBar: MatSnackBar) {}

  /**
   * Showing error message
   * @param msg 
   * @param msg2 
   */
  showError(msg : string , msg2 : string = null) {
    const config = new MatSnackBarConfig()
    config.duration = 3000
    this.snackBar.open(msg, msg2, config)
  }
}
