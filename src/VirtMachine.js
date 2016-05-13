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