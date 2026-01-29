import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  private toastr = inject(ToastrService);
  private options = {
    positionClass: 'toast-bottom-center',
    timeOut: 3000,
    closeButton: true,
    progressBar: true
  }
  
  showErrorMessage(message: string): void {
    this.toastr.error(message, 'Error', this.options);
  }

}
