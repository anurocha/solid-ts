namespace Isp {
    interface IPhone {
        call();
        ring();
        installApp();
        addContact();
        connectWifi();
        connectMobile();
    }
    export class SmartPhone implements IPhone {
        public call(){}
        public ring(){}
        public installApp(){}
        public addContact(){}
        public connectWifi(){}
        public connectMobile(){}
    }

    export class FeaturePhone implements IPhone {
        public call(){}
        public ring(){}
        public installApp(){
            throw new Error('Feature Phone does not support apps..');
        }
        public addContact(){}
        public connectWifi(){
            throw new Error('Feature Phone does not support using Wifi..');
        }
        public connectMobile(){}
    }

    export class BasicTablet implements IPhone {
        public call(){
            throw new Error('Basic Tablet does not support call..');
        }
        public ring(){
            throw new Error('Basic Tablet does not support ring..');
        }
        public installApp(){}
        public addContact(){
            throw new Error('Basic Tablet does not support contacts..');
        }
        public connectWifi(){}
        public connectMobile(){
            throw new Error('Feature Phone does not support using mobile..');
        }
    }
}