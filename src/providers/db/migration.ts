import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

//import { MigrationService } from '../../providers/migration-service';
import { Storage } from '../../providers/db/storage';

@Injectable()
export class Migration {
  
  private storage: Storage;
  private modificacoes: string[];

  constructor (modificacoes?: string[]) {
    this.storage = new Storage();

    if (modificacoes) {
      this.definirModificacoes (modificacoes);
    }
    
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

  criarEstruturaInicial(jaCriada): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!jaCriada) {
        let sql = `CREATE TABLE migrations (
          id INT NOT NULL,
          sequence INT NOT NULL,
          sql_statement TEXT NOT NULL,
          executed CHARACTER(1) NOT NULL DEFAULT 'N',
          PRIMARY KEY (id)
        )`;

        this.storage.adapter.query(sql, [])
          .then((result) => {
            resolve(true);
          })
          .catch((error) => {
            reject(false);
          });
      } else {
        resolve(true);
      }
    });
  }

  definirModificacoes (modificacoes: string[]): void {
    this.modificacoes = modificacoes;
  }

  executarModificacoes (): void {
    if (this.modificacoes.length > 0) {
      for (let sql of this.modificacoes) {
        this.storage.adapter.query(sql, []);
      }
    }
  } 

  aplicar (): void {
    this.checarSeEstruturaInicialJaFoiCriada()
      .then((foiCriada) => {
        return Promise.all([foiCriada, this.criarEstruturaInicial(foiCriada)]); 
      })
      .then((results) => {
        this.executarModificacoes();
      })
      .catch((erro) => {

      });
  } 

}
