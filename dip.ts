namespace Dip {
    export class BluetoothDevice {
        public connect(){ /* do low level network tasks */}
        public scan(){}
    } 
    export class SmartPhone {
        private bt : BluetoothDevice;
        public init(){
            this.bt = new BluetoothDevice();
        }
        public connectBluetooth(){
            this.bt.connect();
        }
    }
}

let sp = new Dip.SmartPhone();
sp.init();
sp.connectBluetooth();