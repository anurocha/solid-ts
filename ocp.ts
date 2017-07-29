namespace Ocp {
    class SmartPhone {
        private phoneModel : string;
        private phoneFullName : string;
        private screenWidth : number;
        private screenHeigth : number;
        constructor(model : string){
            if(model === 'S10'){
                this.phoneModel = 'S10';
                this.screenWidth = 5;
                this.screenHeigth = 10;
                this.phoneFullName = 'Samsung Galasy S10';
            }
            else if(model === '8s'){
                this.phoneModel = '8s';
                this.screenWidth = 4;
                this.screenHeigth = 3;
                this.phoneFullName = 'Apple iPhone 8s';
            }
        }
    }
}