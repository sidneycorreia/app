import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'palestrante-perfil',
  templateUrl: 'perfil.html'
})
export class PalestrantePerfil {
  perfil: any;
  id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get('id');

    this.perfil = {
      "nome":"Zee Abdelnabi",
      "cargo":"In-Vehicle Security Engineer",
      "instituicao":"Major Automotive Company",
      "curriculo": "A dedicated security analyst with comprehensive data and telecommunications experience, Zee Abdelnabi is experienced in SIEM, vulnerability management, security testing and compliance, with expertise in data network security analysis and wireless security. Abdelnabi is technically savvy and adept at solving networking, electronics and computer technology problems. She is effective at training technical and non-technical personnel.",
      "img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/KZqcBBGTid6Sjww3oRgYOU2Z3vgJDT.jpg"
    };
  }

}
