namespace Ocp {
    class SmartPhone {
        protected phoneModel : string;
        protected phoneFullName : string;
        protected screenWidth : number;
        protected screenHeigth : number;
        constructor(){
            this.init();
        }
        protected init(){};
    }

    class S10Phone extends SmartPhone{
        protected init(){
            this.phoneModel = 'S10';
            this.screenWidth = 5;
            this.screenHeigth = 10;
            this.phoneFullName = 'Samsung Galasy S10';
        } 
    }

    export class i8sPhone extends SmartPhone{
        protected init(){
            this.phoneModel = '8s';
            this.screenWidth = 4;
            this.screenHeigth = 3;
            this.phoneFullName = 'Apple iPhone 8s';
        } 
    }
}

let ip = new Ocp.i8sPhone;
