//main file for VM

var trigomatic = (function(){
    //Object that facilitates registers
    var regobj = function(){
        this.r1 = null;
        this.r2 = null;
        this.r3 = null;
    };
    //private object the contains machine functions
    //instruction codes range from a00 to Z99
    var ASM = {
        //load integers to register 1
        "a00":function(mach){
            mach.registers.r1 = 0;
        },
        "a01":function(mach){
            mach.registers.r1 = 1;
        },
        "a02":function(mach){
            mach.registers.r1 = 2;
        },
        "a03":function(mach){
            mach.registers.r1 = 3;
        },
        "a04":function(mach){
            mach.registers.r1 = 4;
        },
        "a05":function(mach){
            mach.registers.r1 = 5;
        },
        "a06":function(mach){
            mach.registers.r1 = 6;
        },
        "a07":function(mach){
            mach.registers.r1 = 10;
        },
        "a08":function(mach){
            mach.registers.r1 = 20;
        },
        "a09":function(mach){
            mach.registers.r1 = 25;
        },
        "a10":function(mach){
            mach.registers.r1 = 50;
        },
        "a11":function(mach){
            mach.registers.r1 = 100;
        },
        "a12":function(mach){
            mach.registers.r1 = 250;
        },
        "a13":function(mach){
            mach.registers.r1 = 500;
        },
        "a14":function(mach){
            mach.registers.r1 = 1000;
        },
        "a15":function(mach){
            mach.registers.r1 = 2000;
        },
        "a16":function(mach){
            mach.registers.r1 = 5000;
        },
        "a17":function(mach){
            mach.registers.r1 = 10000;
        },
        "a18":function(mach){
            mach.registers.r1 = 25000;
        },
        "a19":function(mach){
            mach.registers.r1 = 50000;
        },
        "a20":function(mach){
            mach.registers.r1 = 100000;
        },
        "a21":function(mach){
            mach.registers.r1 = 1000000;
        },
        //load integers to register 2
        "a22":function(mach){
            mach.registers.r2 = 0;
        },
        "a23":function(mach){
            mach.registers.r2 = 1;
        },
        "a24":function(mach){
            mach.registers.r2 = 2;
        },
        "a25":function(mach){
            mach.registers.r2 = 3;
        },
        "a26":function(mach){
            mach.registers.r2 = 4;
        },
        "a27":function(mach){
            mach.registers.r2 = 5;
        },
        "a28":function(mach){
            mach.registers.r2 = 6;
        },
        "a29":function(mach){
            mach.registers.r2 = 10;
        },
        "a30":function(mach){
            mach.registers.r2 = 20;
        },
        "a31":function(mach){
            mach.registers.r2 = 25;
        },
        "a32":function(mach){
            mach.registers.r2 = 50;
        },
        "a33":function(mach){
            mach.registers.r2 = 100;
        },
        "a34":function(mach){
            mach.registers.r2 = 250;
        },
        "a35":function(mach){
            mach.registers.r2 = 500;
        },
        "a36":function(mach){
            mach.registers.r2 = 1000;
        },
        "a37":function(mach){
            mach.registers.r2 = 2000;
        },
        "a38":function(mach){
            mach.registers.r2 = 5000;
        },
        "a39":function(mach){
            mach.registers.r2 = 10000;
        },
        "a40":function(mach){
            mach.registers.r2 = 25000;
        },
        "a41":function(mach){
            mach.registers.r2 = 50000;
        },
        "a42":function(mach){
            mach.registers.r2 = 100000;
        },
        "a43":function(mach){
            mach.registers.r2 = 1000000;
        },
        //load integers to register 3
        "a44":function(mach){
            mach.registers.r3 = 0;
        },
        "a45":function(mach){
            mach.registers.r3 = 1;
        },
        "a46":function(mach){
            mach.registers.r3 = 2;
        },
        "a47":function(mach){
            mach.registers.r3 = 3;
        },
        "a48":function(mach){
            mach.registers.r3 = 4;
        },
        "a49":function(mach){
            mach.registers.r3 = 5;
        },
        "a50":function(mach){
            mach.registers.r3 = 6;
        },
        "a51":function(mach){
            mach.registers.r3 = 10;
        },
        "a52":function(mach){
            mach.registers.r3 = 20;
        },
        "a53":function(mach){
            mach.registers.r3 = 25;
        },
        "a54":function(mach){
            mach.registers.r3 = 50;
        },
        "a55":function(mach){
            mach.registers.r3 = 100;
        },
        "a56":function(mach){
            mach.registers.r3 = 250;
        },
        "a57":function(mach){
            mach.registers.r3 = 500;
        },
        "a58":function(mach){
            mach.registers.r3 = 1000;
        },
        "a59":function(mach){
            mach.registers.r3 = 2000;
        },
        "a60":function(mach){
            mach.registers.r3 = 5000;
        },
        "a61":function(mach){
            mach.registers.r3 = 10000;
        },
        "a62":function(mach){
            mach.registers.r3 = 25000;
        },
        "a63":function(mach){
            mach.registers.r3 = 50000;
        },
        "a64":function(mach){
            mach.registers.r3 = 100000;
        },
        "a65":function(mach){
            mach.registers.r3 = 1000000;
        },
        "a66":function(mach){
            mach.registers.r1 = true;
        },
        "a67":function(mach){
            mach.registers.r2 = true;
        },
        "a68":function(mach){
            mach.registers.r3 = true;
        },
        "a69":function(mach){
            mach.registers.r1 = false;
        },
        "a70":function(mach){
            mach.registers.r2 = false;
        },
        "a71":function(mach){
            mach.registers.r3 = false;
        },
        "a72":function(mach){
            mach.registers.r1 = "";
        },
        "a73":function(mach){
            mach.registers.r2 = "";
        },
        "a74":function(mach){
            mach.registers.r3 = "";
        },
        "a75":function(mach){
            mach.registers.r1 = null;
        },
        "a76":function(mach){
            mach.registers.r2 = null;
        },
        "a77":function(mach){
            mach.registers.r3 = null;
        },
        "a78":function(mach){
            mach.registers.r1 = [];
        },
        "a79":function(mach){
            mach.registers.r2 = [];
        },
        "a80":function(mach){
            mach.registers.r3 = [];
        },
        //adding instructions, storing in third register
        "a81":function(mach){
            mach.registers.r1 = mach.registers.r2 + mach.registers.r3;
        },
        "a82":function(mach){
            mach.registers.r2 = mach.registers.r1 + mach.registers.r3;
        },
        "a83":function(mach){
            mach.registers.r3 = mach.registers.r2 + mach.registers.r1;
        },
        //subtracting instructions, storing in third register
        "a84":function(mach){
            mach.registers.r1 = mach.registers.r2 - mach.registers.r3;
        },
        "a85":function(mach){
            mach.registers.r2 = mach.registers.r1 - mach.registers.r3;
        },
        "a86":function(mach){
            mach.registers.r3 = mach.registers.r2 - mach.registers.r1;
        },
        //multiply registers, store in third register
        "a87":function(mach){
            mach.registers.r1 = mach.registers.r2 * mach.registers.r3;
        },
        "a88":function(mach){
            mach.registers.r2 = mach.registers.r1 * mach.registers.r3;
        },
        "a89":function(mach){
            mach.registers.r3 = mach.registers.r2 * mach.registers.r1;
        },
        //divide registers, store in third register
        "a90":function(mach){
            mach.registers.r1 = mach.registers.r2 / mach.registers.r3;
        },
        "a91":function(mach){
            mach.registers.r2 = mach.registers.r1 / mach.registers.r3;
        },
        "a92":function(mach){
            mach.registers.r3 = mach.registers.r2 / mach.registers.r1;
        },
        //floor division of registers, store in third
        "a93":function(mach){
            mach.registers.r1 = Math.floor(mach.registers.r2 / mach.registers.r3);
        },
        "a94":function(mach){
            mach.registers.r2 = Math.floor(mach.registers.r1 / mach.registers.r3);
        },
        "a95":function(mach){
            mach.registers.r3 = Math.floor(mach.registers.r2 / mach.registers.r1);
        },
        //jumps one if register 1 is zero
        "a96":function(mach){
            if(mach.registers.r1 === 0) {
                mach.index += 1;
            }
        },
        //jumps one if register 2 is zero
        "a97":function(mach){
            if(mach.registers.r2 === 0) {
                mach.index += 1;
            }
        },
        //jumps one if register 3 is zero
        "a98":function(mach){
            if(mach.registers.r3 === 0) {
                mach.index += 1;
            }
        },
        "a99":function(mach){
            if(mach.registers.r1 !== 0) {
                mach.index += 1;
            }
        },
        //jumps one if register 2 is not zero
        "b00":function(mach){
            if(mach.registers.r2 !== 0) {
                mach.index += 1;
            }
        },
        //jumps one if register 3 is not zero
        "b01":function(mach){
            if(mach.registers.r3 !== 0) {
                mach.index += 1;
            }
        },
        //jump backing instructions
        "b02":function(mach){
            if(mach.registers.r1 === 0) {
                mach.index -= 1;
            }
        },
        "b03":function(mach){
            if(mach.registers.r2 === 0) {
                mach.index -= 1;
            }
        },
        "b04":function(mach){
            if(mach.registers.r3 === 0) {
                mach.index -= 1;
            }
        },
        //jump backing if not equal to zero
        "b05":function(mach){
            if(mach.registers.r1 !== 0) {
                mach.index -= 1;
            }
        },
        "b06":function(mach){
            if(mach.registers.r2 !== 0) {
                mach.index -= 1;
            }
        },
        "b07":function(mach){
            if(mach.registers.r3 !== 0) {
                mach.index -= 1;
            }
        },
        "b08":function(mach){
            if(mach.registers.r1 === null) {
                mach.index += 1;
            }
        },
        "b09":function(mach){
            if(mach.registers.r2 === null) {
                mach.index += 1;
            }
        },
        "b10":function(mach){
            if(mach.registers.r3 === null) {
                mach.index += 1;
            }
        },
        "b11":function(mach){
            if(mach.registers.r1 !== null) {
                mach.index += 1;
            }
        },
        "b12":function(mach){
            if(mach.registers.r2 !== null) {
                mach.index += 1;
            }
        },
        "b13":function(mach){
            if(mach.registers.r3 !== null) {
                mach.index += 1;
            }
        }

    };
    function trigomatic(){
        this.registers = new regobj();
        this.stack = [];
        this.instructcount = 0;
        this.returnvalue = null;
        this.repeatcount = false;
        this.index = 0;
        //dictionary of operations on the virtual machine
        this.funcs = ASM;
    }
    trigomatic.prototype.runcode = function(code){
        var instructions = code.split("\n");
        this.instructcount = instructions.length-1;
        for(this.index = 0;this.index<instructions.length;this.index++){
            if(instructions[this.index] in this.funcs){
                try {
                    this.funcs[instructions[this.index]](this);
                }
                catch(err){
                    return "ERROR"
                }
            }
            //allows loading of custom string values into registers
            else if(/^\$[1-3].+/.test(instructions[this.index])){
                switch(instructions[this.index][1]){
                    case "1":
                        this.registers.r1 = instructions[this.index].slice(2, instructions[this.index].length);
                        break;
                    case "2":
                        this.registers.r2 = instructions[this.index].slice(2, instructions[this.index].length);
                        break;
                    case "3":
                        this.registers.r2 = instructions[this.index].slice(2, instructions[this.index].length);
                        break;
                    default:
                        this.registers.r1 = instructions[this.index].slice(2, instructions[this.index].length);
                }
            }
            else {
                return "ERROR"
            }
        }
        //resets return val
        var returned = this.returnvalue;
        this.returnvalue = null;
        return returned;
    };
    return trigomatic;
})();

//exports the VM.
exports.trigomatic = trigomatic;