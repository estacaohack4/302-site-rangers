let botao = document.querySelector('header span');
let sidebar = document.querySelector('.sidebar');
let itensLista = document.querySelectorAll('li');
let imagens = document.querySelectorAll('img');

botao.onclick = function(){
    sidebar.style.transform = "translateX(0)";
};

for(let item of itensLista){
    item.onclick = function(){
        sidebar.style.transform = "translateX(-100%)";
    }
}

setTimeout(function(){
    imagens[0].style.transform = "translateX(0)";
}, 500);

setTimeout(function(){
    imagens[1].style.transform = "translateX(0)";
}, 1500);

setTimeout(function(){
    imagens[2].style.transform = "translateX(0)";
}, 2500);

setInterval(function(){
    let numero = Math.random() * 360;
    imagens[2].style.transform = `rotate(${numero}deg)`;
}, 2000);