function erroFn(value){
    console.log(value);
}
let objData ={
    userEmail:'test@gmail.com'
}


try{
    // erroFn(2);
    if(!objData.userEmail){
        throw new SyntaxError('No data');
    }
}
catch(err){
    console.log(`Catch error information ${err}`);
    console.log(err.name);
    console.log(err.message);
}
finally{
    console.log('Finaly work');
}