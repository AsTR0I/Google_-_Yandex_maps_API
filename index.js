//----------------- GOOGLE MAPS API
// Set map
function initialize() {
    var mapOptions = {
        // Zoom of map on start
        zoom: 10,
        // Initial center cordinates on start (NewYork)
        center: new google.maps.LatLng(58.01046, 56.25017),
        // Type of map (ROADMAP, SATELLITE, HYBRID, TERRAIN)
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // Minimum zoom of map
        minZoom: 2
    };

    // Create a new map instance using provided options
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Create an info window to display location info
    var infoWindow = new google.maps.InfoWindow();

    // Create a marker for example : Iran, Zanjan
    var marker = new google.maps.Marker({
        // Cordinates for Iran, Zanjan
        position: new google.maps.LatLng(57.983607144009994, 56.252149678197625),
        // Attach the marker
        map: map,
        // Tooltip on hover
        title: 'PTPIT'
    });

    // Add click event listener for marker
    marker.addListener('click', function () {
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker);
    });

    // Adjust map center when the window is resized
    google.maps.event.addDomListener(window, "resize", function () {
        map.setCenter(mapOptions.center);
    });


}

// Initialize the map when window loading finished
google.maps.event.addDomListener(window, 'load', initialize);

//----------------- Yandex MAPS API

// The ymaps.ready() function will be called when
    // all the API components are loaded and the DOM tree is generated.
    ymaps.ready(init);
    function init(){ 
        // Creating the map.    
        var myMap = new ymaps.Map("mapY", {
            // The map center coordinates.
            // Default order: “latitude, longitude”.
            // To not manually determine the map center coordinates,
            // use the Coordinate detection tool.
            center: [55.76, 37.64],
            // Zoom level. Acceptable values:
            // from 0 (the entire world) to 19.
            zoom: 7
        });
    }