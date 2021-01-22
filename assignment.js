//https://github.com/saidur1529/Assignment-3

//Task-1
function kilometerToMeter(distance){
    var meter = 0;
    if (distance >= 0){
        var value = distance;
        meter = value / 1000;
    }
    else if( distance < 0){
        console.log("Distance can not be Negative")
    }
    else{
        console.log("Wrong Input")
    }
    return meter;
} 
var conversion = kilometerToMeter(3300);
console.log("Your Converted value is:", conversion,"Meters");