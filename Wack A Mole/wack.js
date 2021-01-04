document.addEventListener('DOMContentLoaded',()=>{
    var Score=0
    var yourScore = document.querySelector('#yourScore')
    var timeleft = document.querySelector('#time')

    function gameGrid(){
        mole = document.querySelector('.moleDiv')
        for(i=0; i<9;i++){
            let Mole = document.createElement('div')
            Mole.setAttribute('class',"moleImages" +` Div${i}`)
            mole.appendChild(Mole)
        }

    }
    
    gameGrid()
    function MoleRandomise(){
        var x=Math.floor(Math.random()*9)
        const MoleImgAppend = document.querySelectorAll('.moleImages')
        var Mooler = document.createElement('img')
        Mooler.setAttribute('class','image')
        Mooler.addEventListener('click',score)
        Mooler.setAttribute('src','./moleImage/images.png')
        MoleImgAppend[x].appendChild(Mooler)
        setTimeout(()=>MoleImgAppend[x].removeChild(MoleImgAppend[x].firstChild),1000)
        console.log(MoleImgAppend)
        // console.log()
    }
    // MoleRandomise()
    var currentTime=60
    
    let timerId = setInterval(function timeRemaining(){
        // var currentTime=60
        if(currentTime === 0){
            clearInterval(timerId)
            alert('Game Over! Your Final Score is'+yourScore.textContent)
            location.reload()
        }
        currentTime--
        timeleft.textContent = currentTime
    },1000)
    console.log(timerId);
    
    setInterval(MoleRandomise,1200) 
    function score(){
        // alert('you just clicked')
        
        
        Score = Score+1
        console.log(Score)
        yourScore.textContent=Score
    }
    
})