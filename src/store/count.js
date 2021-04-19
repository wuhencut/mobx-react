import {observable, action} from "mobx"
 class count {
   @observable num = 1;
   @action plus (){
     this.num ++;
   }
   @action minus () {
     this.num --;
   }
 }