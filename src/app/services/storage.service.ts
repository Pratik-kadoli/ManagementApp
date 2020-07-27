import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { async } from '@angular/core/testing';
import { stringify } from 'querystring';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async store(storageKey : string, value: any){
    
    const encryptedValue = btoa(escape(JSON.stringify(value)))
    await Storage.set({
      key : storageKey,
      value : encryptedValue
    })
  }

  async get(storageKey : string){

    const res = await Storage.get({key : storageKey})

    if(res.value){
      return JSON.parse(unescape(atob(res.value)));
    } else {
      return false;
    }
  }

  async removeItem(storageKey: string) {
    await Storage.remove({key: storageKey})
  }

  async clear() {
    await Storage.clear();
  }
}
