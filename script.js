let map;

function initMap() {
    console.log('init')
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 26.357896, lng: 127.783809 },
        zoom: 3,
        mapTypeId: 'satellite'
    });

    new google.maps.Marker({
        position: { lat: 26.357896, lng: 127.783809 },
        map,
        title: "Japan",
      });

    new google.maps.Marker({
        position: {lat: 52.237049, lng: 21.017532},
        map,
        title: "Poland"
    })
}
