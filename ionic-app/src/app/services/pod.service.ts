import { Injectable } from '@angular/core';
declare global {
  interface Window {
    _env_: {
      POD_NAME: string;
    };
  }
}

@Injectable({
  providedIn: 'root'
})


export class ConfigService {
  private config: { [key: string]: any };

  constructor() {
    this.config = window['_env_'] || {};
  }

  get(key: string): any {
    return this.config[key];
  }
}
