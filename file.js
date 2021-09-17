const fs =require("fs");

// synchrone , bloquante
try{
fs.appendFileSync('message.txt','Bonjour Node JS');
console.log('Message  ajouté');
}
catch(err){
    console.log(err);
}

//asynchrone , non bloquant
fs.readFile('message.txt',"utf-8",function(err,content){console.log(content);});

console.log("traitement suivant");