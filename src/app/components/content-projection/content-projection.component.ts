import { Component, inject, signal, viewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../../services/api/api.service';
import { DialogAuthActionsComponent } from '../dialog-auth-actions/dialog-auth-actions.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';

@Component({
  selector: 'app-content-projection',
  imports: [MatButton, DialogComponent, DialogAuthActionsComponent],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss',
})
export default class ContentProjectionComponent {
  public dialog = viewChild.required(DialogComponent);
  public confirming = signal<null | boolean>(null);
  public apiService = inject(ApiService);

  async confirm() {
    this.confirming.set(true);
    await this.apiService.getInfo();
    this.confirming.set(false);
  }

  async onAuthAction($event: boolean) {
    if ($event) {
      await this.confirm();
    }
    this.dialog().close();
  }
}
