/**(function () {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if(this.status === 200) {
                let container = document.getElementById("bittsContainer");
                let bitts = JSON.parse(xhttp.responseText);

                for (let bitt of bitts) {
                    let bittElement = document.createElement("p");
                    bittElement.innerHTML = bitt.text + "<br> <small>" + bitt.username + "</small>";

                    container.appendChild(bittElement);
                }

            } else {
                console.log("Ooops, there was an error...");
            }
        }
    };

    xhttp.open("GET", "/get-all-bitts", true);
    xhttp.send();
}())
**/

(function () {

    fetch('/get-all-bitts')
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            let container = document.getElementById("bittsContainer");
            let bitts = JSON.parse(text);

            for (let bitt of bitts) {
                let bittElement = document.createElement("p");
                bittElement.innerHTML = bitt.text + "<br> <small>" + bitt.username + "</small>";

                container.appendChild(bittElement);
            }
        })
        .catch(function(error) {
            console.log('Request failed', error);
        });

}())
