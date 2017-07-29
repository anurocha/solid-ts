namespace Lsp {
    interface IPhone {
        call();
        installApp();
    }
    export class Phone implements IPhone {
        public call(){
            console.log('Make call...');
        }
        public installApp(){
            console.log('Phone install the app...');
        }
    }
    
    export class SmartPhone extends Phone {
        public installApp(){
            console.log('SmartPhone install the app...');
        }
    }

    export class FeaturePhone extends Phone {
        public installApp(){
            throw new Error('Feature Phone does not support install app...');
        }
    }
}

let pp = new Lsp.FeaturePhone;
pp.installApp();