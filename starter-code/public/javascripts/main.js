window.onload = () => {
  const ironhackBCN = {
    lat: 41.38623,
    lng: 2.17498
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: ironhackBCN
  });

  function getPlaces() {
    axios
      .get("/api")
      .then(response => {
        console.log(response.data.places);
        placePlaces(response.data.places);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function placePlaces(places) {
    places.forEach(function(place) {
      const center = {
        lat: place.location.coordinates[1],
        lng: place.location.coordinates[0]
      };
      const pin = new google.maps.Marker({
        position: center,
        map: map,
        title: place.name
      });
      markers.push(pin);
    });
  }

  getPlaces();
};
