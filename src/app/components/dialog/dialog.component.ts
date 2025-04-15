import { Component, computed, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  public dialogRef = viewChild.required<ElementRef>('dialogRef');

  public dialogEl = computed(() => {
    return this.dialogRef().nativeElement as HTMLDialogElement;
  });

  public close(): void {
    this.dialogEl().style.display = 'none';
  }

  public open(): void {
    this.dialogEl().style.display = 'block';
  }
}
