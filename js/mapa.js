var map = L.map('map', {
			center: [43.25, -8.00],
			zoom: 10,
		});

		


		//desconectar el zoom al accionar la rueda del ratón.
		map.scrollWheelZoom.disable();
		// add Stamen Watercolor to map. En caso de querer solamente la capa de Stamen
        //habría que borrar las tres últimas lineas y (var stamen=) y descomentar (.addTo(map))
		var stamen= L.tileLayer.provider('Stamen.TonerLite')//.addTo(map);
        var ggl = new L.Google();
        map.addLayer(stamen, ggl);
        map.addControl(new L.Control.Layers( {'Gris':stamen, 'Satélite':ggl}, {}));

        // create a tile layer sourced from mapbox
		//L.tileLayer('https://{s}.tiles.mapbox.com/v4/<javiabia.ce15f303>/{z}/{x}/{y}.png?access_token=<pk.eyJ1IjoiamF2aWFiaWEiLCJhIjoiS1ZyQ3BQYyJ9.v8yJTbF879AQ_t6j5XafiQ').addTo(map);