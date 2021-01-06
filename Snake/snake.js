document.addEventListener('DOMContentLoaded',()=>{
    var gameDiv= document.querySelector('.gameGrid')
    let direction =1
    let snakeArr= [2,1,0]
    document.getElementById("Re_Start").onclick = "location.reload()"
    for(var i=0;i<100;i++){
        const square= document.createElement('div')
        square.setAttribute('class','squares'+` div${i}`)   
        console.log()
        gameDiv.appendChild(square)
    }
    var Squares= document.querySelectorAll('.gameGrid div');
    // Squares[snakeArr].classList.add('snake')
    score=0
    
    function control(e){
        console.log('this is working')
        if (e.code =="ArrowRight"){
            direction= 1
            snakeHead= 'snakeHeadRight'
            // console.log(direction)
        }
        else if(e.code=="ArrowDown"){
            direction = 10
            snakeHead= 'snakeHeadDown'
            // console.log(direction)
        }
        else if(e.code=="ArrowLeft"){
            direction = -1
            snakeHead= 'snakeHeadLeft'
            // console.log(direction)
        }
        else if(e.code=="ArrowUp" ){
            direction = -10
            snakeHead= 'snakeHeadUp'
        }
    }
    function snakeMove(){
                if (
                    (snakeArr[0]+ 10>=(100) && direction===10)||
                    (snakeArr[0]% 10==9 && direction===1)||
                    (snakeArr[0]% 10==0 && direction=== -1)||
                    (snakeArr[0]-10<0 && direction===-10)||
                    (Squares[snakeArr[0]+direction].classList.contains('snake'))
                ){
                    alert('game over')
                    snakeArr=[]
                    location.reload()
                }
                if (Squares[snakeArr[0]].classList.contains('apple')){
                    Squares[snakeArr[0]].classList.remove('apple')
                    snakeArr.push(snakeArr[0])
                    apple()
                    score=score+1;
                    document.getElementById('score').innerHTML= score
                }
                snakeArr.forEach(index=> Squares[index].classList.remove('snake','snakeHeadRight','snakeHeadLeft','snakeHeadUp','snakeHeadDown'))
                snakeArr.pop()
                snakeArr.unshift(snakeArr[0]+direction)
                snakeArr.forEach(index =>{ 
                    if(index==snakeArr[0]&&direction==1){
                        Squares[index].classList.add('snakeHeadRight')
                        }
                    else if(index==snakeArr[0]&&direction==-1){
                        Squares[index].classList.add('snakeHeadLeft')
                        }
                    else if(index==snakeArr[0]&&direction==10){
                        Squares[index].classList.add('snakeHeadDown')   
                        }
                    else if(index==snakeArr[0]&&direction==-10){
                        Squares[index].classList.add('snakeHeadUp')
                        }

                    else{
                        Squares[index].classList.add('snake')
                        }
                })
            }
            
            console.log(direction)
            console.log()
            setInterval(snakeMove,500)
            document.addEventListener('keyup', control)
     function apple(){
         const rand=Math.floor(Math.random()* 99)
        if(Squares[rand].classList.contains('snake'||'snakeHeadRight'||'snakeHeadLeft'||'snakeHeadUp'||'snakeHeadDown')){
            apple()
            console.log("this block was used")
        }
        else{
            console.log("this else part was used")
            Squares[rand].classList.add('apple')
        }
      
    }
    apple()
    
    })