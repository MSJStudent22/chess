class Match{
    constructor() {

        this.container= {
            "a":["r","b","kn","q","k","kn","b","r"],
            "b":["p","p","p","p","p","p","p","p"],
            "c":["0","0","0","0","0","0","0","0"],
            "d":["0","0","0","0","0","0","0","0"],
            "e":["0","0","0","0","0","0","0","0"],
            "f":["0","0","0","0","0","0","0","0"],
            "g":["p","p","p","p","p","p","p","p"],
            "h":["r","b","kn","q","k","kn","b","r"],
        };
        this.logger = [];
        this.turn  = 1;
        this.started = null;
        this.ended = null;
        this.status = "0"
    }

    move(l1, l2){
        let t = this.container[l1.y][l1.x];
        this.container[l2.y][l2.x] = t;
        this.container[l1.y][l1.x] = 0;
        this.logger.push(l1.y + l1.x+" "+ l2.y + l2.x+" ")
    }

    isValid(l1,l2,ptype){
        if(ptype == "p"){

        }
    }

    toJson(){
        return {
            "container":this.container,
            "logger":this.logger,
            "turn": this.turn,
            "started":this.started,
            "ended":this.ended,
            "status": this.status
        }
    }

    isOver(){

    }

    start(){
        this.status = "1";
        let date = new Date();
        this.started = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();

    }

    gameOver(){
        this.status = "0"
        let date = new Date();
        this.ended= date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
    }







}