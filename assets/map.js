var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: new google.maps.LatLng(2.8, -187.3),
        mapTypeId: 'terrain'
    });

    // Cria uma tag <script> e seta a url fonte
    var script = document.getElementsByTagName('script');
    script.src = '' 
}