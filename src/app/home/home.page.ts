import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  B=[2,9,3];
  A=[1,2,3,4,5,6,7,8,9];
  E=[];
  X=[];
  e=[];
  Li=-8;
  dx=16;
  a=-0.01;
  b=2*Math.abs(this.a);
  E2=[];
  aux;
  mejor=[-1.29198979472165,1.0171006317992,0.435417263938648];

  constructor(public alertController: AlertController) {}

  calcular(){
    for (let i = 0; i < 3; i++) {
      this.E[i] = this.a + this.b * Math.random();
      this.X[i] = this.Li + this.dx * Math.random();
      if(Math.random()<0.5){
        this.aux = 1;
      } else {
        this.aux = -1;
      }
      this.X[i+3] = this.mejor[i] + this.aux * this.E[i];
    }
      this.e[0] = this.B[0] - ( this.A[0] * this.X[0] + this.A[1] * this.X[1] + this.A[2] * this.X[2]);
      this.e[1] = this.B[1] - ( this.A[3] * this.X[0] + this.A[4] * this.X[1] + this.A[5] * this.X[2]);
      this.e[2] = this.B[2] - ( this.A[6] * this.X[0] + this.A[7] * this.X[1] + this.A[8] * this.X[2]);
      this.e[3] = this.B[0] - ( this.A[0] * this.X[3] + this.A[1] * this.X[4] + this.A[2] * this.X[5]);
      this.e[4] = this.B[1] - ( this.A[3] * this.X[3] + this.A[4] * this.X[4] + this.A[5] * this.X[5]);
      this.e[5] = this.B[2] - ( this.A[6] * this.X[3] + this.A[7] * this.X[4] + this.A[8] * this.X[5]);
      this.E2[0] = Math.sqrt( Math.pow(this.e[0], 2) + Math.pow(this.e[1], 2) + Math.pow(this.e[2], 2));
      this.E2[1] = Math.sqrt( Math.pow(this.e[3], 2) + Math.pow(this.e[4], 2) + Math.pow(this.e[5], 2));

      if(this.mejor[4] == undefined){
        this.mejor[4] = this.E2[1];
      } else if(this.mejor[4] > this.E2[1]) {
        this.alert();
        /* this.mejor[0] = this.X[0];
        this.mejor[1] = this.X[1];
        this.mejor[2] = this.X[2]; */
        this.mejor[4] = this.E2[1];
      }

  }

  async alert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: 'Hubo una mejora',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
