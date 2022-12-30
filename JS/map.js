var btn = document.querySelector('#btn-rota');
var ip = document.querySelector('#input-ip');

btn.onclick = function(){
    
    //Ip fornecido no formulário
    //console.log(ip.value);

    
    
    
    //Geração de mapa
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}


