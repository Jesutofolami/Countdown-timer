const countDownDate = new Date("Aug 30, 2023 00:00:00").getTime();
const x = setInterval(function(){
    var now = new Date().getTime();
    var timeDiff = countDownDate - now;

    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((timeDiff % (1000 * 60 * 60 )) / (1000 * 60 ));
    var secs = Math.floor((timeDiff % (1000 * 60 )) / 1000);

    document.getElementById("days").innerHTML =  days ;
    document.getElementById("hrs").innerHTML  =  hrs;
    document.getElementById("mins").innerHTML  =  mins;
    document.getElementById("secs").innerHTML  = secs;

   // document.getElementById("demo").innerHTML =  days + "  " + hours + " " + minutes + " " + seconds + " " ;
    if (timeDiff < 0){
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED"
    }
}, 1000); 
