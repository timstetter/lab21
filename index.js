/**
 * 
 */

// Initialize and add the map
function initMap() {
	// The location of Uluru
	const auburnhills = { lat: 42.6875, lng: -83.2341 };
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 12,
		center: auburnhills,
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
		position: auburnhills,
		map: map,
	});
}
