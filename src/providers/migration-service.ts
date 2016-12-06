import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '../providers/db/storage';

@Injectable()
export class MigrationService {
  private storage: any;

  constructor() {
    this.storage = new Storage ();
  }

  existe

  getUltimaAtualizacao (): any {
    console.log('teste 1');
    this.storage.adapter.query("SELECT 'teste' ultimo_script FROM migrations").then((result) => {
      console.log('teste 2');
      this.storage.adapter.fetch(result).then((row) => {
        console.log('teste 3');
        return row.ultimo_script;
      });
    },(error) => {
      console.log('teste 4' + error.message);
      return "";
    });

  }  
}