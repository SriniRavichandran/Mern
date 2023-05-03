// function log(message){
//     console.log(message);
// }

// log("hello world");


// var number =1;
// let count =1;


// function forloop(){
//     for(let i=0;i<=5;i++){
//         console.log(i);
//     }

//     console.log("finally for loop"+i);
// }


// forloop();

// let a:number;
// let b:String;
// let c:boolean;
// let d:any;
// let e:number[]=[123];
// let f:any[] =[1,"a",true];



//string calls

// let color='red';

// let endwidth=color.endsWith('d');

// console.log(endwidth);

// let color;
// let color="SRINIVASAN";
// let endwidth=(<string>color).endsWith("D");
// let wid=(color as String).concat("ravi");
// console.log(endwidth);
// console.log(wid);




// const log=(message)=> console.log(message);

// log("hello");


//interface

// let draw=(x:String,y:Number)=>{
// console.log(x,y)
// }

// draw("a",1);


// interface point{
//     x:String,
//     y:Number,
//     z:Number
// }

// let draw=(point:point)=>{
// console.log(point.x)
// console.log(point.y)
// console.log(point.z)
// }

// draw({x:"a",y:2,z:4})



// interface point{
//     x:String,
//     y:Number,
//     z:Number,
// }

// let draw=(point:point)=>{
// console.log(point.x)
// console.log(point.y)
// console.log(point.z)
// }

// draw({x:"a",y:2,z:4})




//class

// class Point{
//     x:String;
//     y:Number;
//     z:Number;
//     draw=():any =>{
// console.log("x is = "+this.x,"y is = "+this.y,"z is = "+this.z)
//     }


// }

// let shape= new Point();

// shape.x="d";
// shape.y=3;
// shape.z=5;

// shape.draw();


// let shape2=new Point();

// shape2.x="s";
// shape2.y=4;
// shape2.z=5;
// shape2.draw();



//constructure

// class Point{
//     x:String;
//     y:Number;
//     z:Number;


//     constructor(x?:String,y?:Number,z?:Number){
//         this.x=x;
//         this.y=y;
//         this.z=z;
//     }


//     draw=():any =>{
// console.log("x is = "+this.x,"y is = "+this.y,"z is = "+this.z)
//     }


// }

// let shape= new Point("a");
// let shape2= new Point("R",56,3);

// shape.draw();
// shape2.draw();


//Access modified

// class Point{
//    private x:String;
//    private y:Number;
//    private z:Number;


//     constructor(x?:String,y?:Number,z?:Number){
//         this.x=x;
//         this.y=y;
//         this.z=z;
//     }


//    private draw=():any =>{
// console.log("x is = "+this.x,"y is = "+this.y,"z is = "+this.z)
//     }

//     drawRectangle=():any=>{
//         console.log("drawing reactangle");
//         this.draw();
//     }

// }

// let shape2= new Point("R",56,3);


// shape2.drawRectangle();



//simple Access modified 

// class Point{



//     constructor(private x?:String,public y?:Number,public z?:Number){
//         this.x=x;
//         this.y=y;
//         this.z=z;
//     }


//    private draw=():any =>{
// console.log("x is = "+this.x,"y is = "+this.y,"z is = "+this.z)
//     }

//     drawRectangle=():any=>{
//         console.log("drawing reactangle");
//         this.draw();
//     }

// }

// let shape2= new Point("R",56,3);


// shape2.drawRectangle();


//object accessor

//1.getter
//2.setter

// class Point{



//     constructor(private x?:String,public y?:Number,public z?:Number){
//         this.x=x;
//         this.y=y;
//         this.z=z;
//     }


//    private draw=():any =>{
// console.log("x is = "+this.x,"y is = "+this.y,"z is = "+this.z)
//     }

//     drawRectangle=():any=>{
//         console.log("drawing reactangle");
//         this.draw();
//     }

//     get X(){
//         return this.x;
//     }

//     set X(value){
//         this.x=value
//     }

// }

// let shape2= new Point("R",56,3);
// shape2.X="srini";

// shape2.drawRectangle();



//modules
