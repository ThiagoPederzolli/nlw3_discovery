const options = {
  draggin: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

const map = L.map('mapid', options).setView([-31.7534021,-52.3350085], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  incnAnchor: [29, 68],
  popupAnchor: [170, 2]
})

L.marker([-31.7534021,-52.3350085], { icon })
.addTo(map)


function selectImage(event) {
  const button = event.currentTarget;
  const buttons = document.querySelectorAll('.images button');
  buttons.forEach(button => button.classList.remove('active'));
  button.classList.add('active');
  const image = button.children[0];
  const imageContainer = document.querySelector('.orphanage-details > img');
  imageContainer.src =image.src;
}