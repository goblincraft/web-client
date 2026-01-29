import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  toastr = inject(ToastrService);
  
  showErrorMessage(message: string): void {
    this.toastr.error(message);
  }

}
