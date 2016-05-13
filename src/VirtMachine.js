//main file for VM

var trigomatic = (function(){
    //Object that facilitates registers
    var regobj = function(){
        this.r1 = null;
        this.r2 = null;
        this.r3 = null;
    };
    function trigomatic(){

    }
    return trigomatic;
})();

//exports the VM.
exports.trigomatic = trigomatic;