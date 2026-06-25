let latitude = "";
let longitude = "";

document.getElementById("sosBtn").addEventListener("click", function () {

    alert(
        "Emergency Numbers\n\n" +
        "National Emergency: 112\n" +
        "Ambulance: 108\n" +
        "Police: 100\n" +
        "Fire Service: 101"
    );

});

document.getElementById("locationBtn").addEventListener("click", function () {

    navigator.geolocation.getCurrentPosition(function (position) {

        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        document.getElementById("locationText").innerHTML =
            "Latitude: " + latitude +
            "<br>Longitude: " + longitude;

    });

});

document.getElementById("shareBtn").addEventListener("click", function () {

    if (latitude === "") {
        alert("Please get location first.");
        return;
    }

    let mapsLink =
        "https://maps.google.com/?q=" +
        latitude +
        "," +
        longitude;

    navigator.clipboard.writeText(mapsLink);

    alert("Location link copied!");
});

document.getElementById("hospitalBtn").addEventListener("click", function () {

    window.open(
        "https://www.google.com/maps/search/hospitals+near+me",
        "_blank"
    );

});