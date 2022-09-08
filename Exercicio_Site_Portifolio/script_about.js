const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const setaDireita = document.querySelector('.seta-direita');

btn.onclick = function(){
    this.classList.toggle('active');
    body.classList.toggle('active');

    if(body.classList.contains('active')){
        setaDireita.src="images/right_arrow_white.png";
    }
    else{
        setaBaixo.src="images/right-arrow.png";
    }
}