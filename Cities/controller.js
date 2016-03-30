var mapsApp=angular.module('mapsApp', []);
mapsApp.controller('mapsController', function($scope){
	 
        $scope.markers = [];
        $scope.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: new google.maps.LatLng(40.0000, -98.0000)
        });
        var infowindow = new google.maps.InfoWindow;

    function createMarker(city){
    	var latLon = city.latLon.split(',')
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
            '<div><a href="#" onclick="zoomCity('+lat+','+lon+')">Zoom to City</a></div>'  
            '</div>';   

        marker.addListener('click', function() {
          infowindow.setContent(contentString);
          infowindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);
    }

    zoomCity = function(lat, lon){
    var map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(lat, lon),
      zoom: 12
    });          
    }

    $scope.cityClick = function(i){
      google.maps.event.trigger($scope.markers[i], 'click');
      infowindow.open($scope.map, marker);
    }

    $scope.cities = cities;
	for(i=0; i<cities.length; i++){
		createMarker(cities[i]);
	}
});