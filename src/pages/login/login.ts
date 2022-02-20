import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutenticacaoProvider } from '../../providers/autenticacao/autenticacao';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email = '';
  senha = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public autenticacaoProvider: AutenticacaoProvider
    ) {
  }

  ionViewCanEnter() {
    console.log('ionViewCanEnter LoginPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage [CARREGA NA CRIACAO DA TELA]');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter LoginPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter LoginPage');
  }


  entrar() {
    console.log('entrar');



    this.autenticacaoProvider.login(this.email, this.senha).subscribe( (data: any) => {
      console.log('resposta', data);

    }, error => {
      console.log('erro', error);
      const alert = this.alertCtrl.create({
        title: 'Offline',
        subTitle: 'Verifique sua conexão com a internet!',
        buttons: ['OK']
      });
      alert.present();
    });

    // this.navCtrl.setRoot(TabsPage);
  }

  cadastrar() {
    this.navCtrl.push('CadastrarPage');
  }

}
