function computerStore(arr) {
    let inputStart = arr.shift().split(', ').map(Number);
    let totalPrice = 0;
    let taxes = 0;
    while (arr.length > 0) {

        if (inputStart > 0) {
            totalPrice += Number(inputStart);
            taxes += inputStart * 0.2;
} else {
            console.log('Invalid price!')
        }

        inputStart = arr.shift();

    }

    if (totalPrice <= 0) {
        console.log('Invalid order!')

    } else {
        let fullprice = totalPrice + taxes;
        if (inputStart === "special") {
            let discount = (fullprice * 0.1).toFixed(2);
            console.log(`Congratulations you've just bought a new computer!`)
            console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`)
            console.log(`Taxes: ${taxes.toFixed(2)}$`)
            console.log("-----------")
            console.log(`Total price: ${(fullprice - discount).toFixed(2)}$`)
        } else {
            console.log(`Congratulations you've just bought a new computer!`)
            console.log(`Price without taxes: ${totalPrice}$`)
            console.log(`Taxes: ${taxes.toFixed(2)}$`)
            console.log("-----------")
            console.log(`Total price: ${fullprice.toFixed(2)}$`)

        }
    }
}
computerStore([
    '1050', '200',
    '450', '2',
    '18.50', '16.86',
    'special'
])