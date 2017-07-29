namespace IspF {
    interface IPhone {
        call();
        ring();
        addContact();
    }
    interface ISmartFeatures {
        installApp();
        connectWifi();
    }
    interface IMobileConnect {
        connectMobile();
    }
    export class SmartPhone implements IPhone, ISmartFeatures, IMobileConnect {
        public call(){}
        public ring(){}
        public installApp(){}
        public addContact(){}
        public connectWifi(){}
        public connectMobile(){}
    }

    export class FeaturePhone implements IPhone, IMobileConnect {
        public call(){}
        public ring(){}
        public addContact(){}
        public connectMobile(){}
    }

    export class BasicTablet implements ISmartFeatures, IMobileConnect {
        public installApp(){}
        public connectWifi(){}
        public addContact(){}
        public connectMobile(){}
    }
}