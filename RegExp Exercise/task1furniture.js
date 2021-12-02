function furniture(input) {

    let result = 'Bought furniture:\n';
    let price = 0;

    for (const line of input) {
        let regex = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<quantity>[\d]+)/g
        let matcher = regex.exec(line);
        if (matcher) {
            result += matcher.groups.name + '\n';
            price += Number(matcher.groups.price) * Number(matcher.groups.quantity)
        }

    }


    result += `Total money spend: ${price.toFixed(2)}`
    console.log(result)

}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])