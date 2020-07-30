function initMap() {
  // map options
  var options = {
    zoom: 15,
    center: { lat: 37.7642708, lng: -122.461502 },
  };
  // var map = new google.maps.Map(document.getElementById("map"), options);
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();

  directionsDisplay.setMap(map);

  var map = new google.maps.Map(document.getElementById("map"), options);

  // directionsDisplay.setMap(map);

  // Listen for click on map
  google.maps.event.addListener(map, "click", (event) => {
    // Add marker
    addMarker({ coords: event.latLng });
  });

  // Array of Markers
  var markers = [
    {
      coords: { lat: 37.7642708, lng: -122.461502 },
      iconImg:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      content: "<h1>Thing</h1>",
    },
    {
      coords: { lat: 37.7644728, lng: -122.462502 },
      content: "<h1>Thing2</h1>",
    },
  ];

  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  // add marker function
  function addMarker(props) {
    // map marker (marks where current bus is)
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      // icon: props.iconImg,
    });

    // check for customIcon
    if (props.iconImg) {
      // Set iconImg
      marker.setIcon(props.iconImg);
    }

    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });

      // opens info window if clicked
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    }
  }
}
