import express from 'express'
import multer from 'multer'

// userImg

const imgConfig = multer.diskStorage({
    // destination:"./uploads",
    destination: (req, file, callback)=>{
        callback(null, "./uploads")
    },
    filename: (req, file, callback) =>{
        // callback(null, file.OriginalName)
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }    
})

const isImage = (req, file, callback)=>{        
    if(file.mimetype.startsWith('image')){
        callback(null, true)
    }else{
        callback(new Error("only image / photo is allowed"))
    }
}


const upload = multer({
    storage: imgConfig,
    fileFilter: isImage,
    fileSize: '1MB'
})

export default upload;



// if(mimetype=='jpg' || mimetype == 'png' || mimetype == 'jpeg' || mimetype == 'webp'){
// image-65456456454564newcarCivucadsfs.jpg







// image-65456456454564newcarCivucadsfs.jpg
    // newcarCivucadsfs.jpg
    // newcarCivucadsfscopy1.jpg
    // newcarCivucadsfscopy2.jpg

