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