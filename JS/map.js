var btn = document.querySelector('#btn-rota');
var ip = document.querySelector('#input-ip');

var req = new XMLHttpRequest();

btn.onclick = function(){
    
    var myApi = 'http://127.0.0.1:5000/route/' + ip.value;

    //Request utilizando fetch
    
    fetch(myApi, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    
        
    //Geração de mapa
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}


