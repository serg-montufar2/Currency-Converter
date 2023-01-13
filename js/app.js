window.onload = (event) => {

    fetch("https://open.er-api.com/v6/latest").then((response) => {
        //  console.log(response);
         return response.json();
        }).then((json) => {
            // console.log(json.rates);
            console.log(json, "this was successful");
            const keys = Object.keys(json.rates);
            const select = document.querySelectorAll("select");
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
        })
    }
    











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

