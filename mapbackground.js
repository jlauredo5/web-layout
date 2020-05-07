
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 55.875582, lng: -24.877080},
          zoom: 3
        });
      }

      



// const el = document.querySelector("#module");

// el.addEventListener("mousemove", (e) => {
//   el.style.setProperty('--x', -e.offsetX + "px");
//   el.style.setProperty('--y', -e.offsetY + "px");
// });