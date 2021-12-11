///// sugar suntax
/// concatenar los strings
let name = 'Gisele'
let lastName='Yaniunas'
console.log(name + ''+ lastName);
console.log( '${name}  ${lastName}') /// template strings//

/// adicionar
let edad = 36
console.log ( edad+1);
console.log (edad++);


// cracion de funcion
function showTime (prop){
    return(
        console.log(prop.timeStart)
    )
};

//const showTime=(prop)=>{ console.log(prop.timeStart)};
//const showTime=prop=>{ console.log(prop.timeStart)};

// USAR ESTO 
 const showTime=({timeStarr, timeEnd}) => console.log(timeStart)
    
/// numero en el mismo array
let num1 =[1,2,3,4];
let num2=[5,6,7,8,9];
let num3= num1.concat(num2);
console.log(num3);
// USAR ESTO 
num3[...num1, ...num2,];



//// SUGAR SYNTAX
const condicion = true;
let result = null;
if(condicion){
result = 'correct';
} else { result= 'incorrect';

}
console.log (`This is ${result}`);


//// USAR ESTO ///
const condicion =true; 
console.log(`This is ${ condicion ? 'correct' : 'incorrect'}`);



