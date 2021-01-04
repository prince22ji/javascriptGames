document.addEventListener('DOMContentLoaded',()=>{
    const square= document.querySelectorAll('.grid_div')
    const turn = document.querySelector('#turn')
    const result = document.querySelector('#result')
    var currentPlayer = 1
    for(var i=0; i<square.length;i++)

    (fucntion(index){
        square[i].onclick = function(){
            if(squares[index+7].classList.contains('taken')){
                if(currentPlayer===1){
                    square[index].classList.add('taken')
                    square[index].classList.add('player-one')
                    currentPlayer = 2
                    turn.innerHTML = currentPlayer
                }
                elseif(currentPlayer===2){
                    square[index].classList.add('taken')
                    square[index].classList.add('player-two')
                    currentPlayer=1
                    turn.innerHTML=currentPlayer
                }
            }
            else alert('cant go here')
        }
    })(i)
})