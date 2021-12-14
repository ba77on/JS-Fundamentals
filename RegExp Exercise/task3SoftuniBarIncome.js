function barIncome(arr) {

    let fullPrice = 0;

    for (const line of arr) {

        let regex = /%(?<name>[A-Z][a-z]+)%([^\|\%$\.]+)?<(?<product>\w+)>([^\|\%$\.]+)?\|(?<count>[0-9]+)\|([^\|\%$\.\d]+)?(?<price>[0-9]+(\.[0-9]+)?)\$/g
        let matcher = regex.exec(line);

        if (matcher) {

            let totalPrice = Number(matcher.groups.count) * Number(matcher.groups.price)
            console.log(`${matcher.groups.name}: ${matcher.groups.product} - ${totalPrice.toFixed(2)}`)
            fullPrice += totalPrice;
        }

    }
    console.log(`Total income: ${fullPrice.toFixed(2)}`)
}
barIncome(
    [
        '%George%<Croissant>|2|10.3$',
        '%Peter%<Gum>|1|1.3$',
        '%Maria%<Cola>|1|2.4$',
        'end of shift'
    ]
)