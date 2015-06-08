function initialize(coords) {
    var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: "Hier bist du :)"
    });
}

function start() {
    navigator.geolocation.getCurrentPosition(function (position) {
        initialize(position.coords);
    }, function () {
    });
}
//google.maps.event.addDomListener(window, 'load', start);


function displayMap() {
//    document.getElementById("gnar").style.display = "block";
    document.getElementById("map").style.display = "block";
    start();
    
}