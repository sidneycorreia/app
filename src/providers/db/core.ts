import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';
//LER: https://github.com/jgw96/ionic-offline-demo/blob/master/app/pages/home/home.ts

@Injectable()
export class DBCore {
  _window: any = window;
  _db: any;
  _dbPromisse: any;

  constructor(adapter: string) {
    console.log('Esse é meu adpter' + adapter);
    if (adapter == "SQLite") {
      this._db = new SQLite();
      this._dbPromisse = this._db.openDatabase({
        name: 'data.db',
        location: 'default' // the location field is required
      });
    } else {
      this._db = this._window.openDatabase('data.db', '1.0', 'Database APP', -1);
    }
  }

  query (query: string, bindings: any) {

    this._dbPromisse.then(() => {
        this._db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(() => {
        console.log('Deu certo executou a query');
      }, (err) => {
        console.error('Unable to execute sql: ', err);
      });
    }, (err) => {
      console.error('Unable to open database: ', err);
    });
    /*
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
    */
  }

  fetchAll(result) {
      var output = [];
      for (var i = 0; i < result.rows.length; i++) {
          output.push(result.rows.item(i));
      }
      return output;
  }

  fetch(result) {
      return result.rows.item(0);
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


/*
self.getList = function(json) {
    var sql = "SELECT * FROM participantes p\
WHERE 1=1\
AND p.status = 'A'\
ORDER BY p.nome";
    //console.log(sql);
    return DB.query(sql)
        .then(function(result) {
            return DB.fetchAll(result);
        });
};

self.get = function(json) {
    var sql = "SELECT * FROM participantes p\n\
        WHERE 1=1\n\
        AND p.status = 'A'" + (json.participante_id != undefined ? " AND p.id = " + json.participante_id : "") + (json.id != undefined ? " AND p.id = " + json.id : "");

    return DB.query(sql)
        .then(function(result) {
            return DB.fetch(result);
        })
        .then(function(row) {

            self.getListAtividades({
                participante_id: row.id
            }).then(function(atividades) {
                row.atividades = atividades;
            });

            return row;
        });
};*/
