var button = document.getElementById("convert");
var time = document.getElementById("time");
var acceleration = document.getElementById("acceleration");
var speed = document.getElementById("speed");
var distance = document.getElementById("distance");

function convert() {
    //var length = Number(distance.value);
    var clock = Number(time.value);
    var acce = Number(acceleration.value);
    var spee = Number(speed.value);
    distance.value = spee * clock+ (acce * clock * clock) / 2;
}

button.addEventListener("click", convert);

/*Починил твой конвертер, посмотри что поправил*/
/*Большое спасибо*/