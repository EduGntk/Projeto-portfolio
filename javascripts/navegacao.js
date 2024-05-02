function clickMenu(){
    if(botoes.style.display=='none'){
        botoes.style.display='block'
    }else{
        botoes.style.display='none'
    }
}

function Mudou(){
    if(window.innerWidth>=481){
        botoes.style.display='block';
    }else{
        botoes.style.display='none'
    }
}