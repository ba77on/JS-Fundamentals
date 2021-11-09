function storeProvision(stock, ordered) {
    arr = [];

    for (let i = 0; i < stock.length; i += 2) {
        arr.push(stock[i]);
        arr.push(Number(stock[i + 1]));

        for (let j = 0; j < ordered.length; j += 2) {
            if (arr[i] === ordered[j]) {
                (arr[i + 1]) += Number(ordered[j + 1]);
            }
        }
    }

    console.log(obj)
    



}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])