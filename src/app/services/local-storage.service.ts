import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  addItemToLocalStorage(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch (error: any) {
      console.error(`Error setting ${key} to ${value} in local storage: ${error.message}`);
    }
  }

  getItemFromLocalStorage(key: string): any {
    try {
      return localStorage.getItem(key);
    } catch (error: any) {
      console.error(`Error getting ${key} from local storage: ${error.message} ${error}`);
    }
  }

  clearStorage(): void {
    try {
      localStorage.clear();
    } catch (error: any) {
      console.error(`Error clearing local storage: ${error.message}`);
    }
  }
}
