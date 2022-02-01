// Write your solution in this file!
var customerName = 'bob'

// var upperCaseCustomerName = customerName.toUpperCase(customerName)

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = `not bob`
    return bestCustomer
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
    return bestCustomer
}

const leastFavoriteCustomer = 'hi Bob'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'maybe bob'
    return leastFavoriteCustomer
}