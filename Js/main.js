function GetCardData(cardNumber) {
    card = document.getElementById(cardNumber);

    cardImg = card.children[0];
    cardBody = card.children[1];

    cardTitle = cardBody.children[0];
    cardDescription = cardBody.children[1];
    cardPrice = cardBody.children[2];

    document.cookie = "productImg=" + cardImg.src + ";" + "path=/";
    document.cookie = "productTitle=" + cardTitle.innerHTML + ";" + "path=/";
    document.cookie = "productDesc=" + "" + ";" + "path=/"
    document.cookie = "productPrice=" + cardPrice.innerHTML + ";" + "path=/";

}

const x = document.getElementById("location");

function getLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Wait for us.";
    }
}

function showPosition(position) {
    x.innerHTML = "Your location:" + "<br>Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}