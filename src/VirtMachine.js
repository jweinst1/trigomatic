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