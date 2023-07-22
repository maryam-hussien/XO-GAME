let turn='X'
let title=document.querySelector('.title')
let square=[]


function end(n1,n2,n3) {
    title.innerHTML=` ${square[n1]} IS THE WINNER`
    document.getElementById('item'+n1).style.background='black'
    document.getElementById('item'+n2).style.background='black'
    document.getElementById('item'+n3).style.background='black'
    setInterval(function(){title.innerHTML+='.'},500)
    setTimeout(function(){location.reload()},1500)
}

function win() {
     
    for(i=1 ;i<10 ;i++)
    {
        square[i]=document.getElementById('item'+i).innerHTML;
       
    }
    if(square[1]==square[2] && square[2]==square[3] && square[1]!='')
    {
        console.log('win')
        end(1,2,3)
    }
    if(square[4]==square[5] && square[5]==square[6] && square[6]!='')
    {
     console.log('win')
     end(4,5,6)
    }
    if(square[7]==square[8] && square[8]==square[9] && square[9]!='')
    {
     console.log('win')
     end(7,8,9)
    }
    if(square[1]==square[4] && square[4]==square[7] && square[1]!='')
    {
     console.log('win')
     end(1,4,7)
    }
    if(square[2]==square[5] && square[5]==square[8] && square[2]!='')
    {
     console.log('win')
     end(2,5,8)
    }
    if(square[3]==square[6] && square[6]==square[9] && square[3]!='')
    {
     console.log('win')
     end(3,6,9)
    }
    if(square[1]==square[5] && square[5]==square[9] && square[1]!='')
    {
     console.log('win')
     end(1,5,9)
    }
    if(square[3]==square[5] && square[5]==square[7] && square[3]!='')
    {
     console.log('win')
     end(3,5,7)
    }
    if(square[1]!='' && square[2]!='' && square[3]!='' && square[4]!='' && square[5]!='' && square[6]!='' && square[7]!='' && square[8]!='' && square[9]!=''){
        title.innerText='OOPS NO WINNER TRY AGAIN'
        setTimeout(function(){location.reload()},1000)
    }

  
}

 function game(id) {
    let element = document.getElementById(id)
    if (turn === 'X' && element.innerHTML == '')
     {
        element.innerHTML = 'X'
        turn='O'
        title.innerHTML='O TURN'
        win()
     }
     else if(turn === 'O' && element.innerHTML == '')
     {
        element.innerHTML = 'O'
        turn='X'
        title.innerHTML='X TURN'
        win()
     }
   
     
 }
 