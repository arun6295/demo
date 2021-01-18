const imageFilter=function(req,file,cb){
    //Accept images only
    if(!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|)$/)){
        req.fileValidationError='only image filters are allowed';
        return cb(new Error('only image filesb are allowed!'),false);
    }
    cb(null,true);
};

exports.imageFilter=imageFilter;
/*
const docFilter=function(req,file,cb){
    //Accept images only
    if(!file.originalname.match(/\.(pdf|docs|doc)$/)){
        req.fileValidationError='only doc filters are allowed';
        return cb(new Error('only doc files are allowed!'),false);
    }
    cb(null,true);
};
exports.docFilter=docFilter;
*/
