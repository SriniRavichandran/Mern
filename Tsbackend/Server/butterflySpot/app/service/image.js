const multer=require("multer");
const path=require("path");



const Storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Imagefile');
    },
    filename:(req,file,cb)=>{
        console.log(file);
        cb(null,Date.now()+path.extname(file.originalname));
    }
});

 const upload=multer({storage:Storage});

module.exports=upload
