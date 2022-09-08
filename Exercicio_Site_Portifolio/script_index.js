const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const setaBaixo = document.querySelector('.seta');

btn.onclick = function(){
    this.classList.toggle('active');
    body.classList.toggle('active');

    if(body.classList.contains('active')){
        setaBaixo.src="images/down_arrow_white.png";
    }
    else{
        setaBaixo.src="images/down_arrow.png";
    }

    
}