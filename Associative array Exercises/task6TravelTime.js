function travelTime(array) {
    let countries = {};
    for (let element of array) {
        let [country, city, cost] = element.split(' > ');
        cost = Number(cost);
        if (!countries.hasOwnProperty(country)) {
            countries[country] = {
                [city]: cost,
            };
        } else {
            let currentCountry = countries[country];
            let currentCost = currentCountry[city];

            if (!currentCountry.hasOwnProperty(city)) {
                currentCountry[city] = cost;
            } else {
                if (cost < currentCost) {
                    currentCountry[city] = cost;
                }
            }

        }
    }
    let sortByCoutry = Object.entries(countries).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [countryName, town] of sortByCoutry) {
        let sortedTowns = Object.entries(town).sort((a, b) => a[1] - b[1]);
        let print = `${countryName} -> `;
        for (let [townName, townPrice] of sortedTowns) {
            print += `${townName} -> ${townPrice} `;
        }
        console.log(print)
    }
}

travelTime(
    [
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ])