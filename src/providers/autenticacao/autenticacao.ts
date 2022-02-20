import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AutenticacaoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AutenticacaoProvider Provider');
  }

  login(email, senha) {
    return this.http.get(`http://httpbin.org/get`);
    // return this.http.get(`assets/db/simula_autenticacao.json`);
    // return this.http.get(`http://localhost/autenticacao.php?email=${email}&senha=${senha}`);
  }

  cadastro() {

  }

  recuperarSenha() {

  }

}
