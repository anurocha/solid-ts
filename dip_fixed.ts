namespace DipF {
    export interface IBluetooth {
        connect();
        scan();
    }
    export class BluetoothDevice implements IBluetooth {
        public connect(){ 
            /* do low level network tasks */
            console.log('bluetooth connect');
        }
        public scan(){}
    } 
    export class SmartPhone {
        private bt : IBluetooth;
        public init(bt : IBluetooth){
            this.bt = bt;
        }
        public connectBluetooth(){
            this.bt.connect();
        }
    }
}


// production code
let spf = new DipF.SmartPhone();
spf.init(new DipF.BluetoothDevice());
spf.connectBluetooth();

// unit test code
class MockBluetoothDevice implements DipF.IBluetooth {
    public connect(){
        console.log('just mock connect');
    }
    public scan(){
        console.log('just mock scan');
    }
}
let spftest = new DipF.SmartPhone();
spftest.init(new MockBluetoothDevice());
spftest.connectBluetooth();

