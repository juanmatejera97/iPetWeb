import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  showErrorOnSnackbar(error: any, actionText: string = "X", duration: number = 3500, panelClass: string = "error_snackbar") {
    if (!error || !error.error || !error.error.detail) {
      this._snackBar.open('Undefined error.', actionText, {
        duration: duration,
        panelClass: panelClass,
      });
      return;
    }
    this._snackBar.open(error.error.detail, actionText, {
      duration: duration,
      panelClass: panelClass,
    });
  }

  showMessageOnSnackbar(message: string, actionText: string = "X", duration: number = 3500, panelClass: string = "message_snackbar") {
    this._snackBar.open(message, actionText, {
      duration: duration,
      panelClass: panelClass,
    });
  }

}
