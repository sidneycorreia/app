import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AtualizacaoService {

  static get parameters() {
    return [[Http]];
  }
  
  constructor(private http:Http) {

  }

  getAtualizacao(aPartirDe) {
    
    var url = 'http://localhost:8100/assets/data-service/palestrantes.json?a_partir_de=' + encodeURI(aPartirDe);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

}
