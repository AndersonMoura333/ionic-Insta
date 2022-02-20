import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {

  nome = '';
  email = '';
  senha = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewCanEnter() {
    console.log('ionViewCanEnter CadastrarPage');

    let usuarioLogado = true;
    if(usuarioLogado) {
      this.navCtrl.setRoot(TabsPage);
    } else {
      this.navCtrl.setRoot('LoginPage');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPage [CARREGA NA CRIACAO DA TELA]');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CadastrarPage');
  }

}
