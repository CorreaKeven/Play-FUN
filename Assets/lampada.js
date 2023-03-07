function func_lampada() {

    var j=0;
    var lampada = document.getElementById("imglamp");
    var intervalo = window.setInterval(function() {

    //     if (lampada.src.match("ON")) {
    //         lampada.src = "./Assets/pictures/LAMPADA_OFF.png"
    //     } else {
    //         lampada.src = "./Assets/pictures/LAMPADA_ON.png"
    //     }
    //     j++;
    //     if(j==9) {clearInterval(intervalo);}
    // },1000);

    if(j==0){
        lampada.src = "./Assets/pictures/LAMPADA_OFF.png"
        j=1;
    }else if(j==1) {
        lampada.src = "./Assets/pictures/LAMPADA_ON.png"
        j=2;
    }else if(j==2) {
        lampada.src = "./Assets/pictures/crazy1.png"
        j=3;
    }else if(j==3) {
        lampada.src = "./Assets/pictures/crazy2.png"
        j=4;
    }else if(j==4) {
        lampada.src = "./Assets/pictures/crazy3.png"
        j=5;
    }else if(j==5) {
        lampada.src = "./Assets/pictures/crazy4.png"
        j=6;
    }
    else if(j==6) {
        lampada.src = "./Assets/pictures/crazy5.png"
        j=0;
    }
    },1500);
            
}