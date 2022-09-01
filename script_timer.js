var hh = 0;
var mm = 0;
var ss = 0;

var hora = document.getElementById("hora");
var minuto = document.getElementById("min");
var segundo = document.getElementById("seg");

var relogio;
zerar();

function start(){
    ss++;
    relogio = setTimeout(start, 1000);
    if (ss<=59){
        mostraTempo(ss,mm,hh);
    }else{
        ss=0;
        mm++;
        if (mm<=59){
            mostraTempo(ss,mm,hh);
        }else{
            mm=0;
            hh++;
            if(hh<=23){
                mostraTempo(ss,mm,hh);
            }else{
                hh = 0;
            }
        }
    }
}
function pause(){
    clearTimeout(relogio);
}
function zerar(){
    pause();
    ss=0;
    mm=0;
    hh=0;
    hora.innerHTML = "00";
    minuto.innerHTML = " : 00";
    segundo.innerHTML = " : 00";
}
function mostraTempo(s,m,h){
    //checando segundo <10
    if(s<10){
        segundo.innerHTML = " : 0" + s;
    }else{
        segundo.innerHTML = " : " + s;
    }

    //checando minutos <10
    if(m<10){
        minuto.innerHTML = " : 0" + m;
    }else{
        minuto.innerHTML = " : " + m;
    }

    //checando hora <10    
    if(h<10){
        hora.innerHTML = " 0" + h;
    }else{
        hora.innerHTML = h;
    }
}

