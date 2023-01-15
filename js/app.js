// variables that are used throughout the code
const apiURL = "https://open.er-api.com/v6/latest";
const select = document.querySelectorAll("select");

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
                    select[i].append(currencies)
                }
            }
        },
        (err) => {
            console.log(err, "this was an error");
        });
}


const submit = document.querySelector('input[type="submit"');
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        getRates();
    });

const getRates = () => {
    const firstValue = select[0].value;
    const secondValue = select[1].value
        fetch(apiURL + "/" + firstValue).then((response) => {
            return response.json();
        }).then((json) => {
            console.log(json, "this was successful");
            const rateToConvert = json.rates[secondValue];
            exchange(rateToConvert, secondValue);
        },
        (err) => {
            console.log(err, "this was an error");
        })
}

const exchange = (value, currencyCode) => {
    const inputValue = document.getElementById("num-input").value;
    let answer = inputValue * value;
    
    const output = document.getElementById("num-output");
    output.value = answer + " " + currencyCode;
}
