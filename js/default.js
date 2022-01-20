function disBlock(eventEle,_target){
    eventEle.addEventListener('click',function(){
        _target.style.display = 'block';
    })
}

function disNone(eventEleTarget){
    for(let idx=0;idx<eventEleTarget.length;idx++){
        eventEleTarget[idx].addEventListener('click',function(){
            this.style.display = 'none'; 
        })
    }    
}