---
layout: post
title: "Google Maps V.3 Multiple Markers With Infowindow How To"
date: 2011-12-15 13:24:23 -0500
excerpt: how to add multiple markers and infowindows within google maps
comments: true
categories: javascript
tags: javascript google maps code howto
---
Today I want to show you how to set **multiple markers** in **Google Maps v.3** with each marker having their own **infowindow**.  

{% highlight html %}
<html>
  <head>
    <style>
    body { font-family: Helvetica; }
    .map-content h3 { margin: 0; padding: 5px 0 0 0; }
    </style>
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=true"></script>
    <script type="text/javascript">
      // set the Map variable
      var map;
      function initialize() {
        var myOptions = {
          zoom: 9,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var all = [
          ["Location 1", "Summerdale Rd", "Elon", "NC", "27253", "36.150491", "-79.5470544"],
          ["Location 2", "7205 Olmstead Dr", "Burlington", "NC", "27215", "36.069974", "-79.548101"],
          ["Location 3", "W Market St", "Graham", "NC", "27253", "36.0722225", "-79.4016207"],
          ["Location 4", "Mt Hermon Rock Creek Rd", "Graham", "NC", "27253", "35.9826328", "-79.4165216"],
          ["Location 5", "415 Spring Garden St", "Greensboro", "NC", "27401", "36.06761", "-79.794984"]
        ];
        var infoWindow = new google.maps.InfoWindow;
        map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

        // set the center of the map
        var pos = new google.maps.LatLng(36.0621881, -79.5101063);
        map.setCenter(pos);
        function infoCallback(infowindow, marker) {
          return function() {
            infowindow.open(map, marker);
          };
        }

        function setMarkers(map, all) {
          for (var i in all) {
            var name = all[i][0];
            var address = all[i][1];
            var city = all[i][2];
            var state = all[i][3];
            var zip = all[i][4];
            var lat = all[i][5];
            var lng = all[i][6];
            var latlngset;
            latlngset = new google.maps.LatLng(lat, lng);

            var marker = new google.maps.Marker({
              map: map,
              title: city,
              position: latlngset
            });

            var content = '<div class="map-content"><h3>' + name + '</h3>' + address + '<br />' + city + ', ' + state + ' ' + zip + '<br /><a href="http://maps.google.com/?daddr=' + address + ' ' + city + ', ' + state + ' ' + zip + '" target="_blank" rel="noopener">Get Directions</a></div>';
            var infowindow = new google.maps.InfoWindow();
            infowindow.setContent(content);
            google.maps.event.addListener(marker,'click', infoCallback(infowindow, marker));
          }
        }
        // set all markers in the all variable
        setMarkers(map, all);
      };

      // initializes the Google Map
      google.maps.event.addDomListener(window, 'load', initialize);
    </script>
  </head>
  <body>
    <div id="map_canvas" style="height: 500px; width: 800px;"></div>
  </body>
</html>
{% endhighlight %}
