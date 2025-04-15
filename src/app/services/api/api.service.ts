import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  public getInfo(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({});
      }, 1500);
    });
  }
}
