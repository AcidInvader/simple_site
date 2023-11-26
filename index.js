const CC = require("currency-converter-lt")
const os = require("os")
const math = require("./math.js")

let result1 = math.add(2, 5);
let result2 = math.multy(2, 5);
let platform = os.platform()
let currencyConverter = new CC({from: "USD",  to: "RUB", amount: 100})

currencyConverter.convert().then((response) => {
    console.log(`Result_converter: ${response}`)
})

console.log("Your platform:", platform)
console.log(`result: ${result1}`);
console.log(`result_multy: ${result2}`);