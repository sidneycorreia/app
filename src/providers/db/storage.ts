import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite } from 'ionic-native';

interface IAdapter {
  openDatabase(): Promise<any>;
  query(statement: string, params: any): Promise<any>;
  fetchAll(result: any): Array<any>;
  fetch(result: any): any;
}

class AdapterAbstract {

  config: any;

  constructor (config: any) {
      this.config = config;
  }

  fetchAll (result: any): Array<any> {
    var output = [];
    for (var i = 0; i < result.rows.length; i++) {
      output.push(result.rows.item(i));
    }
    return output;
  }

  fetch (result: any): any {
    return result.rows.item(0);
  }
}

class WebSQLAdapter extends AdapterAbstract implements IAdapter {
    window: any = window;
    db: any;

    openDatabase (): Promise<any> {

      return new Promise((resolve, reject) => {
        this.db = this.window.openDatabase(this.config.name, '1.0', 'Database APP', 1 * 1024 * 1024);

        if(this.db){
          resolve('Banco de dados aberto com sucesso');
        } else {
          reject('Nao foi possível conectar ao banco de dados');
        }
      });
    }

    query(statement: string, params: any): Promise<any> {

      return new Promise((resolve, reject) => {

        this.db.transaction((transaction) => {
            transaction.executeSql(statement, params, (transaction, result) => {
                resolve(result);
            }, (transaction, error) => {
                reject(error);
            });
        });

      });
    }
}

class SQLiteAdapter extends AdapterAbstract implements IAdapter {
    db: any;
    dbOpenPromisse: Promise<any>;

    openDatabase (): Promise<any> {

      return new Promise((resolve, reject) => {
        this.db = new SQLite();
        this.dbOpenPromisse = this.db.openDatabase(this.config);

        if(this.db){
          resolve('Banco de dados aberto com sucesso');
        } else {
          reject('Nao foi possível conectar ao banco de dados');
        }
      });
    }

    query(statement: string, params: any): Promise<any> {

      return new Promise((resolve, reject) => {
        this.dbOpenPromisse.then(() => {
          this.db.executeSql(statement, params).then((result) => {
            resolve(result);
          }, (error) => {
            reject(error);
          });
        });
      });
    }
}

class AdapterFactory {

  getAdapter (platform: Platform): IAdapter {
    if (platform.is('cordova')) {
      return new SQLiteAdapter({
        name:     'data.db',
        location: 'default'
      });
    } else {
      return new WebSQLAdapter({name: "data.db"});
    }
  }
}

@Injectable()
export class Storage {
  adapter: IAdapter;

  constructor () {
    let adapterFactory = new AdapterFactory();
    this.adapter = adapterFactory.getAdapter(new Platform());
    this.adapter.openDatabase();
  }
}
