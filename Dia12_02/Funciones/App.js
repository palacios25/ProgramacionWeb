//function con flecha
/*let greet = () => {
  console.log (`Hi`);
}
greet();*/

//function statement (tradicional)
function greet(){
    console.log('hi');
}
greet();

//function are first-class
let  logGreeting = (fn) =>{  //puedo quitar los () si solo es un parametro
    fn();
}
logGreeting(greet);

//Function on the fly
logGreeting = (()=> { 
    console.log(`Hi`);
});
