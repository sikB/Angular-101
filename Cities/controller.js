var mapsApp=angular.module('mapsApp', []);
mapsApp.controller('mapsController', function($scope){
	 
        $scope.placesID = placesID;
        $scope.cities = cities;
        $scope.places = places;
        $scope.markers = [];
        $scope.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: new google.maps.LatLng(40.0000, -98.0000)
        });
        var infowindow = new google.maps.InfoWindow;

    function createMarker(city){
    	var latLon = city.latLon.split(',');
    	var lat = latLon[0];
    	var lon = latLon[1];
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lon),
          map: $scope.map,
          title: city.city,
          animation: google.maps.Animation.DROP
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '<strong>This is some info about ' + city.city + ', ' + city.state + '</strong>' +
            '<div class="year-Rank">'+'Yearly Rank: ' + city.yearRank +'</div>' +
            '<div class="year-estimate">'+'Yearly Estimate: ' + city.yearEstimate +'</div>' +
            '<div class="lastCensus">'+'Last Census: ' + city.lastCensus +'</div>' +
            '<div class="change">'+'Change: ' + city.change +'</div>' +
            '<div class="lastPopDensity">'+'Last Population Density: ' + city.lastPopDensity +'</div>' +
            '<div class="landArea">'+'Land Area: ' + city.landArea +'</div>' +
            '<div class="latLon">'+'Latitude: ' + lat + ' Longitude:' + lon + '</div>' + 
            '<div><a href="#" onclick="zoomCity('+lat+','+lon+')">Zoom to City</a></div>' +
            '<div><a href="#" onclick="directionsClick('+lat+','+lon+')">Get Directions</a></div>' +  
            '</div>';   

        marker.addListener('click', function() {
          infowindow.setContent(contentString);
          infowindow.open($scope.map, marker);
        });
      $scope.markers.push(marker);
    }
     $scope.searchPlaces = function(){
        var service = new google.maps.places.PlacesService($scope.map);
        service.nearbySearch({
          location: $scope.map.getCenter(),
          radius: 50000,
          type: $scope.newTitle
        }, callback);
        // $scope.map = new google.maps.Map(document.getElementById('map'),{
        //   location: $scope.map.getCenter(),
        //   radius: 50000
        // });

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker2(results[i]);
          }
        }
      }
     }

      zoomCity = function(lat, lon){
        var center = new google.maps.LatLng(lat, lon);
        $scope.map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 12
        });
        for(i=0; i<cities.length; i++){
        createMarker(cities[i]);
        } 

        var service = new google.maps.places.PlacesService($scope.map);
        service.nearbySearch({
          location: center,
          radius: 50000,
          type: $scope.newTitle
        }, callback);

        
      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker2(results[i]);
            // console.log(places);
          }
        }
  }
}
     function createMarker2(place) {
       var placeLoc = place.geometry.location;
       var marker = new google.maps.Marker({
          map: $scope.map,
          title: place.city,
          position: place.geometry.location,
          animation: google.maps.Animation.DROP
        });
        
        console.log(place);



        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open($scope.map, this);
        });
      }    

    $scope.cityClick = function(i){
      google.maps.event.trigger($scope.markers[i], 'click');
    }

    directionsClick = function(lat, lon){
      var directionsService = new google.maps.DirectionsService();
      var directionsDisplay = new google.maps.DirectionsRenderer();
      var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      directionsDisplay.setMap(map);
      directionsDisplay.setPanel(document.getElementById('panel-map'));

         var request = {
           origin: 'Atlanta, GA', 
           destination:new google.maps.LatLng(lat,lon), 
           travelMode: google.maps.DirectionsTravelMode.DRIVING
         };

         directionsService.route(request, function(response, status) {
           if (status == google.maps.DirectionsStatus.OK) {
             directionsDisplay.setDirections(response);
           }
         }); 
         for(i=0; i<cities.length; i++){
          createMarker(cities[i]);
  }

}

    // $scope.cities = cities;

	for(i=0; i<cities.length; i++){
		createMarker(cities[i]);
	}


});