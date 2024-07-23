const input = require('sync-input');

console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

let supportedCurrencies = ["USD", "JPY", "EUR", "RUB", "GBP"];

const conversionRates = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

function convertCurrency(sourceCurrency, targetCurrency, moneySum) {
    let inUSD = moneySum / conversionRates[sourceCurrency];
    return inUSD * conversionRates[targetCurrency];
}

while (true) {
    console.log("What do you want to do?");
    let userSelection = input("1-Convert currencies 2-Exit program\n");

    if (userSelection == "2") {
        console.log("Goodbye!");
        break;
    } else if (userSelection != "1" && userSelection != "2") {
        console.log("Unknown input");
        continue;
    }

    while (true) {
        console.log("What do you want to convert?");
        let requestedSourceCurrency = input("From: ").toUpperCase();
        if (!supportedCurrencies.includes(requestedSourceCurrency)) {
            console.log("Unknown currency");
            continue;
        }

        let requestedTargetCurrency = input("To: ").toUpperCase();
        if (!supportedCurrencies.includes(requestedTargetCurrency)) {
            console.log("Unknown currency");
            break;
        }

        let givenMoneySum = Number(input("Amount: "));
        if (isNaN(givenMoneySum)) {
            console.log("The amount has to be a number");
            break;
        }
        if (givenMoneySum < 1) {
            console.log("The amount cannot be less than 1");
            break;
        }

        let conversionResult = convertCurrency(requestedSourceCurrency, requestedTargetCurrency, givenMoneySum);
        console.log(`Result: ${givenMoneySum} ${requestedSourceCurrency} equals ${conversionResult.toFixed(4)} ${requestedTargetCurrency}`);
        break;
    }
}
console.log("Have a nice day!");
