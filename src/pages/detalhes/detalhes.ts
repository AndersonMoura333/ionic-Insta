import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');

    let item = this.navParams.get('detalhes');
    console.log('DetalhesPage', item);

    this.item = item;
  }

  fechar() {
    this.navCtrl.pop();
  }

}
