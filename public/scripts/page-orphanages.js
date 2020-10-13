const map = L.map('mapid').setView([-31.7534021,-52.3350085], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  incnAnchor: [29, 68],
  popupAnchor: [170, 2]
})

const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')


L.marker([-31.7534021,-52.3350085], { icon })
.addTo(map)
.bindPopup(popup);