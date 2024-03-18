const {body}=document;

function changeBackground(number){
    let previoesBackground;
    if(body.className){
        previoesBackground=body.className;
       
    }
    body.className='';
    switch(number){
        case '1':
            return previoesBackground == 'background-1' ? false :  body.classList.add('background-1');
        case '2':
            return previoesBackground == 'background-2' ? false :  body.classList.add('background-2');
        case '3':
            return previoesBackground == 'background-3' ? false :  body.classList.add('background-3');
        default:
            break;
    }
}