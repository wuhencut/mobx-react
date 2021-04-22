import {observable, action, makeAutoObservable} from "mobx"
 class count {
  @observable num = 1;
   @action plus (){
     console.log(11)
     this.num ++;
   }
   @action minus () {
     this.num --;
   }
 }

 export default new count()