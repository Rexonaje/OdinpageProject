let UserImput =  parseInt(prompt("Imput Number"));
let show = UserImput;

let NumberRange =[];
let number=1;
let reminderA;
let reminderB;
let fizz="fizz";
let fuzz="fuzz";

for(let i=0; i<show; i++){
   NumberRange[i] = number;
   
    reminderA= number % 3;
    reminderB= number % 5;
    
    if(reminderA == 0){ 
        NumberRange[i]=fizz;
        if(reminderB == 0){
            NumberRange[i]=fizz+fuzz;
        } 
    }
    else if(reminderB == 0){
        NumberRange[i]=fuzz;
    }  
    else{
        NumberRange[i]=number;
    } 
    
       number= number +1;
}
console.log(NumberRange)