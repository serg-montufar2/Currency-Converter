const data = fetch("https://open.er-api.com/v6/latest").then((response) => {
//  console.log(response);
 return response.json();
}).then((json) => {
    // console.log(json.rates);
    const keys = Object.keys(json.rates);
    const select = document.getElementById("currencies");
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
    const currencies = document.createElement("option");
    currencies.setAttribute("class", "currency-code");
    currencies.setAttribute("value", keys[i]);
    currencies.innerText = keys[i];
    select.append(currencies);
}
})
// }).then((err) => {
//     console.log(err, "this was an error");
// }) 



// window.onload = (event) => {
//     document.querySelector("select").addEventListener("submit", (e) => {
//         e.preventDefault();

//         const search = document.querySelector('input[type="text"]').value;
//         fetch("https://open.er-api.com/v6/latest/" + search).then((response) => {
//         return response.json();

//         }).then((json) => {
//         console.log(json, "this was successful");
        

//         },
//         (error) => {
//             console.log(error, "this was an error")
//         })
//     })
// }

