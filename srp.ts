namespace Srp {
    export class SmartPhone {
        private apps : Array<string>;
        private contacts : Array<string>;
        private phoneNumber : string;
        private phoneModel : string;
        private screenWidth : number;
        private screenHeigth : number;
        private volume: number;
        private ringLevel : number;
        constructor(){
            this.phoneModel = 'S10';
            this.ringLevel = 3;
            this.volume = 10;
            this.screenWidth = 5;
            this.screenHeigth = 10;
        }
        public call( telNum : number){
            console.log(`Calling to ${telNum}`);
        }
        public ring(){
            console.log(`I am Ringing with ${this.ringLevel} and volume ${this.volume}`);
        }
        public installApp(appName : string){
            this.apps.push(appName);
        }
        public launchApp(appName : string){
            let app = this.apps.filter(element => element === appName);
            console.log(`lauch app - ${app}`);
        }
        public addContact(contact : string){
            this.contacts.push(contact);
        }
        public getScreenPixel() : number {
            return this.screenWidth * this.screenHeigth;
        }
        public getModel() : string {
            return this.phoneModel;
        }
    }
}

let phone = new Srp.SmartPhone;
phone.ring();
console.log(phone.getModel());
