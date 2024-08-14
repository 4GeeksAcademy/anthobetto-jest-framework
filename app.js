let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
};

function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

function fromDollarToYen(dollars) {
    let dollarsConvertion = dollars / oneEuroIs.USD;
    return dollarsConvertion * oneEuroIs.JPY;
}

function fromYenToPound(yen) {
    let yenConvertion = yen / oneEuroIs.JPY;
    return yenConvertion * oneEuroIs.GBP;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };