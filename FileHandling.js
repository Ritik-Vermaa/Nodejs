const { log } = require("console");
const fs = require("fs");

// //sync ka matlab syncrownus call
// fs.writeFileSync('./test.txt' , 'Hey There');


//Async call
fs.writeFile('./test.txt' , 'Hey There , Good Job' , (err) =>{});

//sync call
// const result = fs.readFileSync('./contact.txt' , 'utf-8');
// console.log(result);

//Async call
fs.readFile('./contact.txt' , 'utf-8' ,(err , result) =>{
    if(err){
        console.log("Error" , err);
    }
    else{
        console.log(result);
    }
});

