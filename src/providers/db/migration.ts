import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

//import { MigrationService } from '../../providers/migration-service';
import { Storage } from '../../providers/db/storage';

@Injectable()
export class Migration {
  
  private storage: Storage;

  constructor () {
    this.storage = new Storage();
  }

  checarSeEstruturaInicialJaFoiCriada (): Promise<any> {
    let sql = `SELECT name
               FROM sqlite_master
               WHERE type='table'
               AND name='migrations'`;
    
    return new Promise((resolve, reject) => {
      this.storage.adapter.query(sql, []).then((result) => {

          if (result.rows.length >= 1) {
            resolve(true);
          } else {
            resolve(false);
          }

      });
    });
  }

  criarEstruturaInicial(): void {

  }

  checarSeTemInternet (): boolean {
    return true;
  }

  pegarNovasModificacoes (): void {

  }

  executarModificacoes (): void {

  } 

  aplicar (): void {
    this.checarSeEstruturaInicialJaFoiCriada().then((criada) => {
      if (criada) {
        console.log ('criado: ' + criada);
      } else {
        this.criarEstruturaInicial();
        console.log ('NÃO foi criado: ' + criada);
      }
    });
  } 

}
