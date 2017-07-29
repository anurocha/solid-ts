namespace SrpF {
    export class SmartPhone {
        private volume: number;
        private ringLevel : number;
        private apps : Apps;
        private info : PhoneInfo;
        private contacts : Contacts;
        constructor(){
            this.apps = new Apps();
            this.info = new PhoneInfo('S10');
            this.contacts = new Contacts();
            this.ringLevel = 3;
            this.volume = 10;
        }
        public call( telNum : number){
            console.log(`Calling to ${telNum}`);
        }
        public ring(){
            console.log(`I am Ringing with ${this.ringLevel} and volume ${this.volume}`);
        }
        public installApp(appName : string){
            this.apps.install(appName);
        }
        public launchApp(appName : string){
            this.apps.launch(appName);
        }
        public addContact(contact : string){
            this.contacts.add(contact);
        }
        public getScreenPixel() : number {
            return this.info.getScreenPixel();
        }
        public getModel() : string {
            return this.info.getModel();
        }

    }

    export class Apps {
        private apps : Array<string>;
        public install(appName : string){
            this.apps.push(appName);
        }
        public launch(appName : string){
            let app = this.apps.filter(element => element === appName);
            console.log(`lauch app - ${app}`);
        }
    }

    export class Contacts {
        private contacts : Array<string>;
        public add(contact : string){
            this.contacts.push(contact);
        }
    }

    export class PhoneInfo {
        private phoneNumber : string;
        private phoneModel : string;
        private screenWidth : number;
        private screenHeigth : number;
        constructor(model : string){
            this.phoneModel = model;
            this.screenWidth = 5;
            this.screenHeigth = 10;
        }
        public getModel() : string {
            return this.phoneModel;
        }
        public getScreenPixel() : number {
            return this.screenWidth * this.screenHeigth;
        }
    }
}
