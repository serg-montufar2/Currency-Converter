
window.onload = (event) => {
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();

        const search = document.querySelector('input[type="text"]').value;
        fetch("https://open.er-api.com/v6/latest/" + search).then((response) => {
            console.log(response);
            console.log(response.json());
            // return response.json();

        })
    })
}

