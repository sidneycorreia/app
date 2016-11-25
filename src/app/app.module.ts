import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { PalestranteLista } from '../pages/palestrante/lista';
import { PalestrantePerfil } from '../pages/palestrante/perfil';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2
    ,PalestranteLista
    ,PalestrantePerfil
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2
    ,PalestranteLista
    ,PalestrantePerfil
  ],
  providers: []
})
export class AppModule {}
