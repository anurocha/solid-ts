namespace LspF {
    interface IPhone {
        call();
    }
    interface ISmartPhone {
        installApp();
    }
    export class Phone implements IPhone {
        public call(){
            console.log('Phone install the app...');
        }
    }
    
    export class SmartPhone extends Phone implements ISmartPhone {
        public installApp(){
            console.log('SmartPhone install the app...');
        }
    }

    export class FeaturePhone extends Phone {
    }
}

let p = new LF.FeaturePhone;
p.installApp();