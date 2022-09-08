console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

// This function will take a string and add it to the basket array. Then once it has added the string to the array it will return true. 
function addItem(item){
    console.log( 'Adding ' + item + ' to the basket');
    basket.push(item);
    return true
} //end addItem

// This function will sort and display one by one through the list of item in the basket array 
function listItems(inbasket){
    for (let i=0; i<=inbasket.length; i++){
        console.log(inbasket[i])
    }
} //end listItems

// This function will empty everything inside the basket array and set it back to an empty array
function remove(){
    console.log( 'Removing items from basket');
    basket = [];
    console.log( 'Basket is now empty');
} //end remove

console.log (addItem('Soda'));

console.log(basket);

listItems(basket)
addItem('Soup');
addItem('Candy');
addItem('Steak');

listItems(basket);

remove();

console.log(basket);

console.log(addItem('Potatoe'));

console.log(basket);