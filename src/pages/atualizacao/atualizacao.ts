import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtualizacaoService } from '../../providers/atualizacao-service';


/*
  Generated class for the Atualizacao page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-atualizacao',
  templateUrl: 'atualizacao.html',
  providers: [AtualizacaoService]
})
export class AtualizacaoPage {
  
  movies: Array<any>;

  constructor(public navCtrl: NavController, private atualizacaoService: AtualizacaoService) {}

  ionViewDidLoad() {
    console.log('Hello AtualizacaoPage Page');

    this.atualizacaoService.getAtualizacao('2016-02-01').subscribe(
      data => {
        this.movies = data.results; 
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => console.log('Movie Search Complete')
    );
  }

}
