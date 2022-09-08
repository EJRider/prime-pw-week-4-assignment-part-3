console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
    console.log( 'Adding ' + item + ' to the basket');
    basket.push(item);
    return true;
} //end addItem

console.log (addItem('Soda'));

console.log(basket);
