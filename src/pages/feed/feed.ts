import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public objeto_feed = {
      titulo:"Diogo Silva",
      data:"Maio 31, 1985",
      descricao:"Estou criando um app incrivel...",
      qtde_likes:12,
      qtde_comment:8,
      time_comment:"11h ago"
  }

  public nome_usuario:string = "Diogo Silva do Código";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  public somaDoisNumeros(num1:number, num2:number): void{
   // alert(num1 + num2);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 99);
  }

}
