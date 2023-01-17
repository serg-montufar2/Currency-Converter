// variables that are used throughout the code
const apiURL = "https://open.er-api.com/v6/latest";
const select = document.querySelectorAll("select");
const list = [];

// This will have the code execute when the window loads
window.onload = (event) => {
    fetch(apiURL).then((response) => {
         return response.json();
        }).then((json) => {
            //This turns the keys of the exchange rates into an array
            const keys = Object.keys(json.rates);
            //This adds each of the keys or currency codes into the dropdown menus one by one
            for (let i = 0; i < select.length; i++) {
                for (let j = 0; j < keys.length; j++) {
                    const currencyDropdown = document.createElement("option");
                    currencyDropdown.setAttribute("class", "currency-code");
                    currencyDropdown.setAttribute("value", keys[j]);
                    currencyDropdown.innerText = keys[j];
                    select[i].append(currencyDropdown);
                    //This adds each currency code into a separate list
                    if (i === 0)
                        list.push(keys[j]);
                }
                //When either of the dropdown menus are changed, it will 
                select[i].addEventListener("change", (e) => {
                    flagImage(e.target);
                });
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

const flipButton = document.getElementById("flip-button");
flipButton.addEventListener("click", (e) => {
    e.preventDefault();
    // const input = document
    let tempValueForDropdown = select[0].value;
    select[0].value = select[1].value;
    select[1].value = tempValueForDropdown;
    flagImage(select[1]);
    flagImage(select[0]);
    getRates();
    // let tempValueForInput = 
});

const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    closeButton.parentElement.style.display = "none";
});

const getRates = () => {
    const valueOfFirstDropDown = select[0].value;
    const valueOfSecondDropDown = select[1].value;
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

const flagImage = (dropdown) => {
    const currencyValue = dropdown.value;
    let flagURL = dropdown.parentNode.querySelector("img");
    const str = currencyValue.substring(0, 2).toLowerCase();
    console.log(str);
    for (let i = 0; i < list.length; i++) {
        if (currencyValue === list[i] && i !== 5)
            flagURL.src = `https://flagpedia.net/data/flags/w1160/${str}.webp`
        if (str === "an")
            flagURL.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Flag_of_the_Netherlands_Antilles_%281959–1986%29.svg/800px-Flag_of_the_Netherlands_Antilles_%281959–1986%29.svg.png`;
        if (str === "eu")
            flagURL.src = `https://flagpedia.net/data/org/w1160/${str}.webp`;
        if (str === "xa")
            flagURL.src = `https://order.ceifx.com/img/flags/128/xaf.png?version=4.3.0`;
        if (str === "xc")
            flagURL.src = `https://order.ceifx.com/img/flags/128/xcd.png?version=4.3.0`;
        if (str === "xd")
            flagURL.src = `https://www.fotw.info/images/i/int-imf3.gif`;
        if (str === "xo")
            flagURL.src = `https://order.ceifx.com/img/flags/512/xof.png?version=4.3.0`;
        if (str === "xp")
            flagURL.src = `https://order.ceifx.com/img/flags/512/xpf.png?version=4.3.0`;
    }
}





