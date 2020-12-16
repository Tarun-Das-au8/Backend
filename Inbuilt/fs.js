var fs = require('fs');

//OverWrite the content
// fs.writeFile('mytext.txt','This is from Node FS',function(err){
//     if(err) throw err;
//     console.log('Task Done')
// });


// fs.appendFile('mytext.txt','This is from Node FS \n',function(err){
//     if(err) throw err;
//     console.log('Task Done')
// });


//read the file
// fs.readFile('mytext.txt','utf-8',function(err,data){
//     if(err) throw err;
//     console.log(data)
// })


/*
//Delete the file
fs.unlink('mytext.txt',function(err){
    if(err) throw err;
    console.log("File Deleted")
})*/

//Rename
fs.rename('mytext.txt','mydata.txt',function(err){
    if(err) throw err;
    else{
        console.log("File Renamed")
    }
   
})