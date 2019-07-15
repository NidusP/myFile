const fs = require("fs");
const path = require('path');
const basePath = "C:\\Users\\ma\\Desktop\\首页新增张\\"
const dir = "4"
const dirPath = dir+"\\"
const str = `<picture aria-hidden="true" tabindex="-1"><!--[if IE 9]><video style="display: none;"><![endif]--><source srcset="images/banner8-5100-3400.jpg 5100w, images/banner8-767-511.jpg 767w, images/banner8-1023-682.jpg 1023w, images/banner8-575-383.jpg 575w, images/banner8-1499-999.jpg 1499w, images/banner8-600-400.jpg 600w, images/banner8-500-333.jpg 500w" media="(orientation: landscape)"><source srcset="images/banner8-2048-3072.jpg 2048w, images/banner8-511-767.jpg 511w, images/banner8-682-1023.jpg 682w, images/banner8-383-575.jpg 383w, images/banner8-999-1499.jpg 999w, images/banner8-533-800.jpg 533w, images/banner8-500-750.jpg 500w" media="(orientation: portrait)"><!--[if IE 9]></video><![endif]--><img alt="" /></picture>`

fs.readdir(basePath + dirPath,function(err, files){
    if (err) {
        return console.error(err);
    }

    files.forEach( function (file){
        console.log( `<img src="./${dir}/${file}" />`);
        if( path.extname(file) === ".jpg" ){
            let newName = path.basename(file, ".jpg")
            newName = `0702-banner${dir}-${newName.replace('.','-')}`
            console.log( newName);
            fs.rename( basePath + dirPath + file ,  basePath + dirPath + newName + ".jpg", (err) => {
                if (err) throw err;
                console.log('重命名完成');
            });
        }
    });
});