import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  usuarioObj = {
    usuario:'',
    email: '',
    telefone: ''
  }


  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  salvar() {
    // console.log("nome: ", this.usuario);
    // console.log('email: ', this.email);
    // console.log('telefone: ', this.telefone);
    let dados = 'Nome: ' + this.usuarioObj.usuario + '; Email: ' + this.usuarioObj.email  + '; Telefone: ' + this.usuarioObj.telefone
      const alert = this.alertCtrl.create({
        title: 'Usuario',
        subTitle: dados,
        buttons: ['OK']
      });
      alert.present();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Salvar?',
      message: 'Tem certeza que deseja salvar?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.salvar();
          }
        }
      ]
    });
    confirm.present();
  }
}

