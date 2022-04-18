//Showad Huda CIS4004 Summer 2021
// Mapping of all currency abbreviations to full currency name
// JSON object currency abbreviation (use the abbreviation as an index to the allCurrencies[], 
// e.g. allCurrencies["AED"], "United Arab Emirates Dirham" is returned)

var allCurrencies = 
{
  "AED": "United Arab Emirates Dirham",
  "AFN": "Afghan Afghani",
  "ALL": "Albanian Lek",
  "AMD": "Armenian Dram",
  "ANG": "Netherlands Antillean Guilder",
  "AOA": "Angolan Kwanza",
  "ARS": "Argentine Peso",
  "AUD": "Australian Dollar",
  "AWG": "Aruban Florin",
  "AZN": "Azerbaijani Manat",
  "BAM": "Bosnia-Herzegovina Convertible Mark",
  "BBD": "Barbadian Dollar",
  "BDT": "Bangladeshi Taka",
  "BGN": "Bulgarian Lev",
  "BHD": "Bahraini Dinar",
  "BIF": "Burundian Franc",
  "BMD": "Bermudan Dollar",
  "BND": "Brunei Dollar",
  "BOB": "Bolivian Boliviano",
  "BRL": "Brazilian Real",
  "BSD": "Bahamian Dollar",
  "BTC": "Bitcoin",
  "BTN": "Bhutanese Ngultrum",
  "BWP": "Botswanan Pula",
  "BYN": "Belarusian Ruble",
  "BZD": "Belize Dollar",
  "CAD": "Canadian Dollar",
  "CDF": "Congolese Franc",
  "CHF": "Swiss Franc",
  "CLF": "Chilean Unit of Account (UF)",
  "CLP": "Chilean Peso",
  "CNH": "Chinese Yuan (Offshore)",
  "CNY": "Chinese Yuan",
  "COP": "Colombian Peso",
  "CRC": "Costa Rican Colón",
  "CUC": "Cuban Convertible Peso",
  "CUP": "Cuban Peso",
  "CVE": "Cape Verdean Escudo",
  "CZK": "Czech Republic Koruna",
  "DJF": "Djiboutian Franc",
  "DKK": "Danish Krone",
  "DOP": "Dominican Peso",
  "DZD": "Algerian Dinar",
  "EGP": "Egyptian Pound",
  "ERN": "Eritrean Nakfa",
  "ETB": "Ethiopian Birr",
  "EUR": "Euro",
  "FJD": "Fijian Dollar",
  "FKP": "Falkland Islands Pound",
  "GBP": "British Pound Sterling",
  "GEL": "Georgian Lari",
  "GGP": "Guernsey Pound",
  "GHS": "Ghanaian Cedi",
  "GIP": "Gibraltar Pound",
  "GMD": "Gambian Dalasi",
  "GNF": "Guinean Franc",
  "GTQ": "Guatemalan Quetzal",
  "GYD": "Guyanaese Dollar",
  "HKD": "Hong Kong Dollar",
  "HNL": "Honduran Lempira",
  "HRK": "Croatian Kuna",
  "HTG": "Haitian Gourde",
  "HUF": "Hungarian Forint",
  "IDR": "Indonesian Rupiah",
  "ILS": "Israeli New Sheqel",
  "IMP": "Manx pound",
  "INR": "Indian Rupee",
  "IQD": "Iraqi Dinar",
  "IRR": "Iranian Rial",
  "ISK": "Icelandic Króna",
  "JEP": "Jersey Pound",
  "JMD": "Jamaican Dollar",
  "JOD": "Jordanian Dinar",
  "JPY": "Japanese Yen",
  "KES": "Kenyan Shilling",
  "KGS": "Kyrgystani Som",
  "KHR": "Cambodian Riel",
  "KMF": "Comorian Franc",
  "KPW": "North Korean Won",
  "KRW": "South Korean Won",
  "KWD": "Kuwaiti Dinar",
  "KYD": "Cayman Islands Dollar",
  "KZT": "Kazakhstani Tenge",
  "LAK": "Laotian Kip",
  "LBP": "Lebanese Pound",
  "LKR": "Sri Lankan Rupee",
  "LRD": "Liberian Dollar",
  "LSL": "Lesotho Loti",
  "LYD": "Libyan Dinar",
  "MAD": "Moroccan Dirham",
  "MDL": "Moldovan Leu",
  "MGA": "Malagasy Ariary",
  "MKD": "Macedonian Denar",
  "MMK": "Myanma Kyat",
  "MNT": "Mongolian Tugrik",
  "MOP": "Macanese Pataca",
  "MRO": "Mauritanian Ouguiya (pre-2018)",
  "MRU": "Mauritanian Ouguiya",
  "MUR": "Mauritian Rupee",
  "MVR": "Maldivian Rufiyaa",
  "MWK": "Malawian Kwacha",
  "MXN": "Mexican Peso",
  "MYR": "Malaysian Ringgit",
  "MZN": "Mozambican Metical",
  "NAD": "Namibian Dollar",
  "NGN": "Nigerian Naira",
  "NIO": "Nicaraguan Córdoba",
  "NOK": "Norwegian Krone",
  "NPR": "Nepalese Rupee",
  "NZD": "New Zealand Dollar",
  "OMR": "Omani Rial",
  "PAB": "Panamanian Balboa",
  "PEN": "Peruvian Nuevo Sol",
  "PGK": "Papua New Guinean Kina",
  "PHP": "Philippine Peso",
  "PKR": "Pakistani Rupee",
  "PLN": "Polish Zloty",
  "PYG": "Paraguayan Guarani",
  "QAR": "Qatari Rial",
  "RON": "Romanian Leu",
  "RSD": "Serbian Dinar",
  "RUB": "Russian Ruble",
  "RWF": "Rwandan Franc",
  "SAR": "Saudi Riyal",
  "SBD": "Solomon Islands Dollar",
  "SCR": "Seychellois Rupee",
  "SDG": "Sudanese Pound",
  "SEK": "Swedish Krona",
  "SGD": "Singapore Dollar",
  "SHP": "Saint Helena Pound",
  "SLL": "Sierra Leonean Leone",
  "SOS": "Somali Shilling",
  "SRD": "Surinamese Dollar",
  "SSP": "South Sudanese Pound",
  "STD": "São Tomé and Príncipe Dobra (pre-2018)",
  "STN": "São Tomé and Príncipe Dobra",
  "SVC": "Salvadoran Colón",
  "SYP": "Syrian Pound",
  "SZL": "Swazi Lilangeni",
  "THB": "Thai Baht",
  "TJS": "Tajikistani Somoni",
  "TMT": "Turkmenistani Manat",
  "TND": "Tunisian Dinar",
  "TOP": "Tongan Pa'anga",
  "TRY": "Turkish Lira",
  "TTD": "Trinidad and Tobago Dollar",
  "TWD": "New Taiwan Dollar",
  "TZS": "Tanzanian Shilling",
  "UAH": "Ukrainian Hryvnia",
  "UGX": "Ugandan Shilling",
  "USD": "United States Dollar",
  "UYU": "Uruguayan Peso",
  "UZS": "Uzbekistan Som",
  "VEF": "Venezuelan Bolívar Fuerte",
  "VND": "Vietnamese Dong",
  "VUV": "Vanuatu Vatu",
  "WST": "Samoan Tala",
  "XAF": "CFA Franc BEAC",
  "XAG": "Silver Ounce",
  "XAU": "Gold Ounce",
  "XCD": "East Caribbean Dollar",
  "XDR": "Special Drawing Rights",
  "XOF": "CFA Franc BCEAO",
  "XPD": "Palladium Ounce",
  "XPF": "CFP Franc",
  "XPT": "Platinum Ounce",
  "YER": "Yemeni Rial",
  "ZAR": "South African Rand",
  "ZMW": "Zambian Kwacha",
  "ZWL": "Zimbabwean Dollar"
};

// JSON object for currencies of interest to convert to
// Initial data for exchange rates
var exchangeRates = {
"disclaimer": "Usage subject to terms: https://openexchangerates.org/terms",
"license": "https://openexchangerates.org/license",
"timestamp": 1534107604,
"base": "USD",
"rates": {
	"AUD" : 1.34,
	"BTC": 0.000030,
	"GBP": 0.72,
	"CAD": 1.25,
	"CUP": 23.99,
	"DOP": 57.08,
	"EUR": 0.85,    
	"JPY": 110.01,
	"MXN": 19.88,
	"USD": 1,
	"KRW": 1145.58,  
	"THB": 32.64
}
};

/* Write function convertCurrency() to perform conversion by doing the following
	1. Store the user-entered US dollars in a var
	2. Store the selected currency option in a var
	3. Update the label with ID resultLabel (i.e use a jQuery selector), set the text (i.e. use method text()) passing as an argument ("full currency name (currency abbreviation)")
	4. Store the conversion rate in a var; the conversion rate is in the JSON object, exhangeRates, property rates, index [selected option]
	5. Store the conversion result in a var; the US dollars multiplied by the conversion rate
	6. Update HTML element with ID resultCurrency to set the value to the conversion result with two (2) fixed decimal places 
*/

$("#toCurrency").change(function convertCurrency() {
	var $input = $("#usdInput").val();
	var $toCurrencyKey = $("#toCurrency").val();
	var convertedVal = $input * exchangeRates.rates[$toCurrencyKey];
	
	//Rounding up
	var roundedVal = convertedVal.toFixed(2);
	var truncatedVal = convertedVal.toFixed(20).slice(0, -18);
	var profit = "0.00" + convertedVal.toFixed(20).slice(truncatedVal.length);

$("#resultLabel").text(`${allCurrencies[$toCurrencyKey]} (${$toCurrencyKey})`);
$("#resultCurrency").val(roundedVal);
});

/* Write function updateCurrencyDropdown() to update the currency dropdown list by doing the following
	1. Create a var to store the HTML string that will add the options to the select
	2. The first <option> element is: <option value="" disabled selected>Select currency</option>
	3. Using a for...in loop, loop through the currencies listed in the rates property of the exchangeRates object to add each currency and its abbreviation to the dropdown; 
	the <option> element for each currency should show the full currency name followed by the currency's abbreviation in parentheses (e.g. Canadian Dollar (CAN)
	4. Once the HTML string is built with each currency <option>, update the element with ID toCurrency (i.e. using a jQuery selector) HTML (i.e. use method html()) by passing the HTML string as an argument
*/

$("#update").on("click", function updateCurrencyDropdown() {
	var jsonText = $("#exchangeRates").text();

	try {
		exchangeRates = JSON.parse(jsonText);
	} 
	catch (err) {
		console.log(err)
	}

	var rateSet = Object.keys(exchangeRates.rates);

$("#toCurrency").html('<option value="" disabled selected>Select currency</option>');
	for (var key in allCurrencies) {
		if (rateSet.includes(key)) {
$("#toCurrency").append(`<option value="${key}" >${allCurrencies[key]} (${key})</option>`);
	}
};

$("#resultLabel").text("To Currency ():");
$("#resultCurrency").val("---.--");
})

/*
Create a jQuery ready listener (i.e. $(function{});) that
1. calls the function updateCurrencyDropdown()
2. Registers a change event listener on element with ID "toCurrency"
1. Use a selector for element with ID "toCurrency"; when the element changes based on a user selecting a currency (i.e use event change()), pass function convertCurrency as an argument
*/

$().ready(function () {
	var rateSet = Object.keys(exchangeRates.rates);

$("#toCurrency").html('<option value="" disabled selected>Select currency</option>');
	for (var key in allCurrencies) {
		if (rateSet.includes(key)) {
$("#toCurrency").append(`<option value="${key}" >${allCurrencies[key]} (${key})</option>`);
	}
};

});
