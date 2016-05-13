//main file for VM

var trigomatic = (function(){
    //Object that facilitates registers
    var regobj = function(){
        this.r1 = null;
        this.r2 = null;
        this.r3 = null;
    };
    //private object the contains machine functions
    var ASM = {
        "li":function(mach){

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