var btn = document.querySelector('#btn-rota');
var ip = document.querySelector('#input-ip');
var tittle_card = document.querySelector('#tittle_card');
var ip_card = document.querySelector('#ip_card');
var country_card = document.querySelector('#country_card');
var state_card = document.querySelector('#state_card');

var req = new XMLHttpRequest();

btn.onclick = function(){
    
    var myApi = 'http://127.0.0.1:5000/route/' + ip.value;

    fetch(myApi, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //for(count = 0; count < data.length; count++){
            //    console.log(data[0]['IP']);
            //    console.log(data[0]['Country']);
            //    console.log(data[0]['Country']['CNAME']);
            //    console.log(data[0]['Country']['RNAME']);
            //}
        })
        .catch(error => console.log(error))
}


