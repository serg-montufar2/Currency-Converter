// variables that are used throughout the code
const apiURL = "https://open.er-api.com/v6/latest";
const select = document.querySelectorAll("select");
const valueOfFirstDropDown = select[0].value;
const valueOfSecondDropDown = select[1].value;

// This will have the code execute when the window loads
window.onload = (event) => {
    fetch(apiURL).then((response) => {
         return response.json();
        }).then((json) => {
            // console.log(json, "this was successful");
//This turns the keys of the exchange rates into an array
            const keys = Object.keys(json.rates);
            //This adds each of the keys or currency codes into the dropdown menus one by one
            for (let i = 0; i < select.length; i++) {
                for (let j = 0; j < keys.length; j++) {
                    const currencies = document.createElement("option");
                    currencies.setAttribute("class", "currency-code");
                    currencies.setAttribute("value", keys[j]);
                    currencies.innerText = keys[j];
                    select[i].append(currencies);
                }
            }
        },
        (err) => {
            console.log(err, "this was an error");
        });
}

const submit = document.querySelector("#calc-button");
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        getRates();
    });

const getRates = () => {
    fetch(apiURL + "/" + valueOfFirstDropDown).then((response) => {
        return response.json();
    }).then((json) => {
        console.log(json, "this was successful");
        const rateToConvert = json.rates[valueOfSecondDropDown];
        exchange(rateToConvert, valueOfSecondDropDown);
    },
    (err) => {
        console.log(err, "this was an error");
    });
}

const exchange = (value, currencyCode) => {
    const inputValue = document.getElementById("num-input").value;
    let answer = (inputValue * value).toFixed(2);
    const output = document.getElementById("num-output");
    output.value = answer + " " + currencyCode;
}

const flagImage = (currencyCodeIndex) => {
    let flagURL = document.querySelector(".flag");
    for (let i = 0; i < flagURL.length; i++) {
        for (let j = 0; j < countryListForFlags; j++) {
            if (currencyCodeIndex === j)
                flagURL = `https://flagpedia.net/data/flags/w1160/${countryListForFlags[i]}.webp`;


        }
    }
}