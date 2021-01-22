//https://github.com/saidur1529/Assignment-3

//Task-1
function kilometerToMeter(distance){
    var meter = 0;
    if (typeof distance !== "number"){
        return "Wrong input type";
    }
    else if( distance < 0){
        return "Distance can not be Negative";
    }
    else{
        meter = distance * 1000;
        return meter;
    }   
} 
var conversion = kilometerToMeter(20);
console.log(conversion);