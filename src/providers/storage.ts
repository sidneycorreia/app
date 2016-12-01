import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

interface IStorage {
  openDatabase(config: any): Promise<any>;
  query(statement: string, params: any): Promise<any>;
  fetchAll(result: any): Array<any>;
  fetch(result: any): any;
}

class StorageAbstract {

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

class WebSQLAdapter extends StorageAbstract implements IStorage {
    window: any = window;
    db: any;

    openDatabase (config: any): Promisse<any> {

      return new Promise((resolve, reject) => {
        this.db = this.window.openDatabase(config.name, '1.0', 'Database APP', -1);

        if(this.db){
          resolve('Banco de dados aberto com sucesso');
        } else {
          reject('Nao foi possível conectar ao banco de dados');
        }
      });
    }

    query(statement: string, params: any): Promisse<any> {

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

class StorageFactory {
  platform: Platform;

  constructor () {
        if (this.platform.is('cordova')) {
            //SQLiteAdapter
        } else {
            new WebSQLAdapter({name: "data.db"});
        }
  }
}

@Injectable()
export class Storage {
  db: IStorage;

  constructor () {
    this.db = new StorageFactory();
  }
}
