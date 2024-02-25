// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 50.082997943172046, lng: 14.40427497088424 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Tequila Tales Bar",
  });
}

initMap();
