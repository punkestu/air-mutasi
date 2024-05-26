var map = L.map("map", {
  zoomControl: false,
  scrollWheelZoom: false,
  touchZoom: false,
  doubleClickZoom: false,
}).setView([-2, 117.0577694], 5);
const mapIndonesiaURL =
  "https://raw.githubusercontent.com/ans-4175/peta-indonesia-geojson/master/indonesia-prov.geojson";

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 18,
// }).addTo(map);

fetch(mapIndonesiaURL)
  .then((response) => response.json())
  .then((data) => {
    L.geoJson(data, {
      style: {
        color: "blue",
        fillColor: "blue",
        fillOpacity: 0.5,
      },
    }).addTo(map);
  });
