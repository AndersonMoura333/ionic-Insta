import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list = []
  constructor(public navCtrl: NavController) {
    this.list = this.simulaDados()
  }

  simulaDados(){
    let _list = [];
    for (let index = 0; index < 10 ; index++) {
      const element ={
        usuario: 'usuario ' + index,
        texto: 'Bem vindo ' + index,
        foto_usuario: 'https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/marty-avatar.png',
        foto_banner: 'https://picsum.photos/400/400/?random' + index,
        qtd_curtidas: 20 + index,
        qtd_comentarios: 2 + index
      } ;
      _list.push(element)

    }
    return _list
  }


}
