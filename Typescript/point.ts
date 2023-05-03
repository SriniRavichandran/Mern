export class Point{



    constructor(private x?:String,public y?:Number,public z?:Number){
        this.x=x;
        this.y=y;
        this.z=z;
    }


   private draw=():any =>{
console.log("x is = "+this.x,"y is = "+this.y,"z is = "+this.z)
    }

    drawRectangle=():any=>{
        console.log("drawing reactangle");
        this.draw();
    }

    get X(){
        return this.x;
    }

    set X(value){
        this.x=value
    }

}

