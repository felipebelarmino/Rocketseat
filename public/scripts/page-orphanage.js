const options = {
    dragging:false,
    touchZomm: false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false,    
}
//create map
const map = L.
map('mapid',options).
setView([-23.5434615,-46.3148178], 15);

//create and add tileLayer
L.
tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
).addTo(map);

//create icon
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//create and add marker
L.
marker([-23.5434615,-46.3148178],{icon}).
addTo(map)

