import { MatSnackBar } from '@angular/material/snack-bar';

// import { Filter, OrderBy } from './base-filter';
import { snackBarAction } from './snackbar-action';

export class BaseComponent {
  public isLoading: boolean;
  public index : number = 0;

  constructor(private snackBar: MatSnackBar) { }

  showMessage(message: string) {
    this.snackBar.open(message, snackBarAction.Close, {
      duration: 5000,
      panelClass: 'green-snackbar',
    });
  }

  showError(message: string) {
    this.snackBar.open(message, snackBarAction.Close, {
      duration: 10000,
      panelClass: 'red-snackbar',
    });
  }

  // getQueryString(filter: Filter): string {
  //   return `page=${filter.Page}&pageSize=${filter.PageSize}&query=${filter.Query ? filter.Query : undefined
  //     }&orderby=${OrderBy.DESC}`;
  // }
}
