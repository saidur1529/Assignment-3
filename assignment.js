//https://github.com/saidur1529/Assignment-3

//Task-1 begins
function kilometerToMeter(distance){
    var meter = 0;
    if (typeof distance !== "number"){
        return "Wrong input type";
    }
    else if( distance < 0){
        return "Distance can not be Negative!";
    }
    else{
        meter = distance * 1000;
        return meter;
    }   
} 
var conversion = kilometerToMeter(20);
console.log(conversion);
// End of Task-1

//Task-2 begins
function budgetCalculator(watch,phone,computer){
    if (typeof watch !== "number" || typeof phone !== "number" || typeof computer !== "number") {
        return "Error: Please enter correct input type.";
    }
    else if (watch < 0 || phone < 0 || computer < 0) {
        return "Items in cart can not be Negative!";
    } 
    else{
    var watch_price = 50;
    var phone_price = 100;
    var computer_price = 500;
    var total_budget;
    total_budget = watch * watch_price + phone_price * phone + computer * computer_price;
    return total_budget;
    }
}

const total_budget=budgetCalculator(3,2,1);
console.log(total_budget);

//Task-3 Begins
function hotelCost(days_stayed) {
    var total_bill = 0;
    if(days_stayed < 0){
        return "Days can not be Negative!";
    }
    else if(typeof days_stayed !== "number"){
        return "Error: Wrong input type";
    }
    else if(days_stayed <= 10){
        total_bill = days_stayed* 100;
    }
    else if(days_stayed <= 20){
        var regular_rent = 10 * 100;
        var remaining = days_stayed - 10;
        var discount_20 = remaining * 80;
        total_bill = regular_rent + discount_20;
    }
    else{
        var regular_rent = 10 * 100;
        var discount_20 = 10 * 80;
        var remaining = days_stayed - 20;
        var discount_50 = remaining *50;
        total_bill = regular_rent + discount_20 + discount_50;
    }
    return total_bill;
}
var cost = hotelCost(29);
console.log(cost);
//Task-3 ends here

//Task-4 Begins
function megaFriend(frnd_list) {
    var max_length = 0;
    var friend_name;
    var name_length;
    for (var i = 0; i < frnd_list.length; i++) {
        var name=frnd_list[i].split(' ').join('');
        name_length = name.length;
        if (name_length > max_length) {
            max_length = name_length;
            friend_name = frnd_list[i];
        }
    }

    return friend_name;
}
var largest_name = megaFriend(["k         al", "Jamal", "Salaam", "Baaaalam"]);
console.log(largest_name);
//Task-4 ends here