import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PalestrantePerfil } from '../palestrante/perfil';

@Component({
  selector: 'palestrante-lista',
  templateUrl: 'lista.html'
})
export class PalestranteLista {
  palestrantes: Array<{nome: string, cargo: string, instituicao: string, img: string }>;

  constructor(public navCtrl: NavController) {
    this.palestrantes = [
      {"nome":"Zee Abdelnabi","cargo":"In-Vehicle Security Engineer","instituicao":"Major Automotive Company","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/KZqcBBGTid6Sjww3oRgYOU2Z3vgJDT.jpg"},
      {"nome":"Jared Ablon","cargo":"CISO","instituicao":"AirMap","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/2B4zLSiUV82vpvwoMWQ0jeGRdi10s3.jpg"},
      {"nome":"Michael A. Brown","cargo":"President and Chief Executive Officer","instituicao":"Symantec","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/Wcc53G9dcFUEupmoG6ykLa4OUroEXY.jpg"},
      {"nome":"Hamza Abusalah","cargo":"Ph.D. Student","instituicao":"Institute of Science and Technology Austria","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/UftLmOLOoypEa5qFhqfFdMUevDJLHC.jpg"},
      {"nome":"Ed Adams","cargo":"CEO","instituicao":"Security Innovation","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/usgFFYs53sKpdGi34JdeYI0anm5KFf.jpg"},
      {"nome":"J. Trent Adams","cargo":"Director, Ecosystem Security","instituicao":"PayPal, Inc.","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/uKGoyZ5DOiaWPSrPx0BJhW6JmqcHnT.jpg"},
      {"nome":"William Adams","cargo":"Vice President for Research","instituicao":"Merit Network","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/7eKnAZPinuawYfMSVMOTXWFaG9YBU2.jpg"},
      {"nome":"David Adler","cargo":"Attorney/Founder","instituicao":"Adler Law Group","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/LJS36ydcxIh01dj3DIYDE5FcpxjM92.jpg"},
      {"nome":"Phil Agcaoili","cargo":"SVP & Chief Information Security Officer","instituicao":"Elavon","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/7vXF6qXlzhkn0ehCzboQ8GcAN5hf9M.jpg"},
      {"nome":"Ryan Agee","cargo":"Technical Director","instituicao":"NSA/CSS Threat Operations Center (NTOC)","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/1Bl53yCvV2RNvxIQHRZeW8ydja1i0w.jpg"},
      {"nome":"Michael Aisenberg","cargo":"Senior Fellow","instituicao":"George Washington University Center for Cyber & Homeland Security","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/0DrWPAT5cHRk73wKpX5rpVMc6CMLr3.jpg"},
      {"nome":"James Alderman","cargo":"Postdoctoral Research Assistant","instituicao":"Royal Holloway, University of London","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/nKDfFtO94cp5gpgy5sL3r0Cb3r2mx3.jpg"},
      {"nome":"Matt Alderman","cargo":"Vice President, Global Strategy","instituicao":"Tenable Network Security","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/5qze7gRzGk2S8CFhotjuTszbup0wTO.jpg"},
      {"nome":"Candy Alexander","cargo":"Director, International Board & Cybersecurity Career Lifecycle Chair","instituicao":"ISSA (Information Systems Security Association)","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/Q14YzYLygbtLKiPmaD2U0nt1oiRy7E.jpg"},
      {"nome":"Josh Alexander","cargo":"Director, Identity","instituicao":"Salesforce","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/6wuZKV1yPiZ4lZKGWpa028RlSIkBA0.jpg"},
      {"nome":"Ammar Alkassar","cargo":"CEO","instituicao":"Rohde & Schwarz Cybersecurity","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/ammar_alkassar.jpg"},
      {"nome":"Dmitri Alperovitch","cargo":"Co-Founder & CTO","instituicao":"CrowdStrike","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/YzBWv7UuorApvaWk2IYHqd3ycuDQWh.jpg"},
      {"nome":"Dan Amiga","cargo":"Founder and CTO","instituicao":"FireGlass","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/0Z23JsN9JWCEzYgZG37xK4g7dawczV.jpg"},
      {"nome":"Ian Amit","cargo":"Vice President","instituicao":"ZeroFOX","img":"https://www.rsaconference.com/writable/speakers/photo/520x520centertop/r3MU2b1DUOVX1iklXkCQsUZFFEh8kb.jpg"}
    ];
  }

  changePage(event) {
    this.navCtrl.push(PalestrantePerfil, {
      id: '1'
    });
  }

}
