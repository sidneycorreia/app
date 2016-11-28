import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';

@Injectable()
export class DBCore {
  _window: any = window;
  _db: any;

  constructor(adapter: string) {

    if (adapter == "SQLite") {
      this._db = new SQLite();
      this._db.openDatabase({
        name: 'data.db',
        location: 'default' // the location field is required
      })
    } else {
      this._db = this._window.openDatabase('data.db', '1.0', 'Database APP', -1);
    }
  }

  query (query: string, bindings: any) {

    return new Promise((resolve, reject) => {

      this._db.transaction((transaction) => {
          transaction.executeSql(query, bindings, (transaction, result) => {
            console.log("Deu certo" + query);
              resolve(result);
          }, (transaction, error) => {
              reject(error);
          });
      });

    });

  }

  init () {
    let sql = "CREATE TABLE palestrantes (\
                id INTEGER NOT NULL PRIMARY KEY,\
                nome VARCHAR NOT NULL,\
                funcao VARCHAR,\
                instituicao VARCHAR,\
                curriculo VARCHAR,\
                status CHAR(1) DEFAULT 'S' NOT NULL,\
                sincronizado_em TIMESTAMP NOT NULL\
              );";

    this.query(sql, []);
  }

}
