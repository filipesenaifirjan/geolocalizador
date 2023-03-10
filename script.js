let h2 = document.querySelector('h2')

function success(pos){
    h2.textContent = `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`
}

function error(err){
    console.log(err)
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 3000
})

//navigator.geolocation.clearWatch(watchID)