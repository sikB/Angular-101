var mapsApp=angular.module('mapsApp', []);
mapsApp.controller('mapsController', function($scope){
	 
        $scope.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: new google.maps.LatLng(40.0000, -98.0000)
        });

    function createMarker(city){
    	var latLon = city.latLon.split(',')
    	var lat = latLon[0];
    	var lon = latLon[1];
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lon),
          map: $scope.map,
          title: city.city
        });
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            'This is some info about ' + city.city + ', ' + city.state + 
            '<div class="year-Rank">'+'Yearly Rank: ' + city.yearRank +'</div>' +
            '<div class="year-estimate">'+'Yearly Estimate: ' + city.yearEstimate +'</div>' +
            '<div class="lastCensus">'+'Last Census: ' + city.lastCensus +'</div>' +
            '<div class="change">'+'Change: ' + city.change +'</div>' +
            '<div class="lastPopDensity">'+'Last Population Density: ' + city.lastPopDensity +'</div>' +
            '<div class="landArea">'+'Land Area: ' + city.landArea +'</div>' +
            '<div class="latLon">'+'Latitude: ' + lat + ' Longitude:' + lon + '</div>' +   
            '</div>';           
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        marker.addListener('click', function() {
          infowindow.open($scope.map, marker);
        });
    }

    $scope.cities = cities;
	for(i=0; i<cities.length; i++){
		createMarker(cities[i]);
	}
});