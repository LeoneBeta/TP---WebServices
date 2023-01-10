var btn = document.querySelector('#btn-rota');
var ip = document.querySelector('#input-ip');

var req = new XMLHttpRequest();

btn.onclick = function(){
    
    var myApi = 'http://127.0.0.1:5000/route/' + ip.value;

    //Geração de mapa
    var map = L.map('map').setView([-19.8157, -43.9542], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 10,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    fetch(myApi, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for(count = 0; count < data.lenght; count++){
                if(data[count]['Coord']['lat'] != 0){
                    map.setView([data[count]['Coord']['lat'], data[0]['Coord']['lon']] ,13)
                    L.marker([data[count]['Coord']['lat'], data[0]['Coord']['lon']]).addTo(map)
                }
            }
        })
        .catch(error => console.log(error))
}


