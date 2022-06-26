let map;
const Poland = { lat: 52.237049, lng: 21.017532};
const Germany = { lat: 52.520008, lng: 13.404954};
const Czech = { lat: 50.075539, lng: 14.437800};
let polandMarker, germanyMarker, czechMarker;
let polandWindow, germanyWindow, czechWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: Poland,
        zoom: 5,
        mapTypeId: 'satellite'
    });

    //Markers
    polandMarker = placeMarker(Poland, "Poland");
    germanyMarker = placeMarker(Germany, "Germany");
    czechMarker = placeMarker(Czech, "Czech");

    //Windows
    polandWindow = infoWindow(
        "Capital: <b> Warsaw </b>" + "<br>" +
        "Country: <b> Poland 🇵🇱</b>" + "<br>" +
        "Warsaw Population: <b>1.783m</b> (2020)" + "<br>" +
        "Poland Population: <b>37.95m</b> (2020)"
    )

    germanyWindow = infoWindow(
        "Capital: <b> Berlin </b>" + "<br>" +
        "Country: <b> Germany 🇩🇪</b>" + "<br>" +
        "Berlin Population: <b>3.76m</b> (2020)" + "<br>" +
        "Germany Population: <b>83.24m</b> (2020)"
    )

    czechWindow = infoWindow(
        "Capital: <b> Prague </b>" + "<br>" +
        "Country: <b> Czech 🇨🇿</b>" + "<br>" +
        "Prague Population: <b>1.3m</b> (2020)" + "<br>" +
        "Czech Population: <b>10.7m</b> (2020)"
    )

    //Add listeners
    giveListener(polandMarker, polandWindow, false);
    giveListener(germanyMarker, germanyWindow, false);
    giveListener(czechMarker, czechWindow, false);
}

function placeMarker(pos, title)
{
    return new google.maps.Marker({
        position: pos,
        map,
        title: title
    })
}

function infoWindow(content)
{
    return new google.maps.InfoWindow({
        content: content,
    })
}

function giveListener(marker, window, focus)
{
    marker.addListener("click", () => {
        window.open({
            anchor: marker,
            map,
            shouldFocus: focus,
        });
    });
}

function selectLocation(position, location)
{
    map.position = position;

    switch(location)
    {
        case "Poland":
            polandWindow.open({
                anchor: polandMarker,
                map,
                shouldFocus: focus,
            });
            germanyWindow.close();
            czechWindow.close();
            break;
        case "Germany":
            germanyWindow.open({
                anchor: germanyMarker,
                map,
                shouldFocus: focus,
            });
            polandWindow.close();
            czechWindow.close();
            break;
        case "Czech":
            czechWindow.open({
                anchor: czechMarker,
                map,
                shouldFocus: focus,
            });
            polandWindow.close();
            germanyWindow.close();
            break;
    }
}
