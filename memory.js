document.addEventListener('DOMContentLoaded', () => {
    const cardArr=[
        {
            name:'mustang',
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3Omn2xMerorUaxlhcNS8WbP9L8zmwDs2tw&usqp=CAU'
        },
        {
            name:'mustang',
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3Omn2xMerorUaxlhcNS8WbP9L8zmwDs2tw&usqp=CAU'
        },
        {
            name:'challenger',
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnakrkj6dA8qGvRR0wE1zxpPTpvujhWTYhlg&usqp=CAU'
        },
        {
            name:'challenger',
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnakrkj6dA8qGvRR0wE1zxpPTpvujhWTYhlg&usqp=CAU'
        },
        {
            name:'camaro',
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HQ_nBMiEukiXUvUhlg67Crs3ZnwEI8Daog&usqp=CAU'
        },
        {
            name:'camaro',
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HQ_nBMiEukiXUvUhlg67Crs3ZnwEI8Daog&usqp=CAU'
        },
        {
            name:'charger',
            src:'https://www.seekpng.com/png/detail/328-3283554_category-fast-and-furious-live-dodge-charger.png'
        },
        {
            name:'charger',
            src:'https://www.seekpng.com/png/detail/328-3283554_category-fast-and-furious-live-dodge-charger.png'
        },
        {
            name:'gtr r34',
            src:'https://img.pngio.com/nissan-skyline-r34-gt-r-v-spec-ii-r34-gtr-nissan-skyline-car-nissan-skyline-gtr-r-png-429_235.png'
        },
        {
            name:'gtr r34',
            src:'https://img.pngio.com/nissan-skyline-r34-gt-r-v-spec-ii-r34-gtr-nissan-skyline-car-nissan-skyline-gtr-r-png-429_235.png'
        },
        {
            name:'rx7',
            src:'https://i.pinimg.com/originals/ba/e5/6c/bae56c8b3c2053ec830cbd016a4532a9.png'
        },
        {
            name:'rx7',
            src:'https://i.pinimg.com/originals/ba/e5/6c/bae56c8b3c2053ec830cbd016a4532a9.png'
        }
    ]
    const cardsChoosen =[]
    const cardsChoosenId =[]
    const grid = document.querySelector('.grid')
    function createBoard(){
        for (let i=0; i < cardArr.length; i++){
            const card= document.createElement('img')
            card.setAttribute('src','https://pbs.twimg.com/profile_images/1240080664440913920/8cTywtY-_400x400.jpg')
            card.setAttribute('data-id',i)
            card.setAttribute('class','size')
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
            
        }
    }

    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChoosen.push(cardArr[cardId].name)
        cardsChoosenId.push(cardId)
        this.setAttribute('src',cardArr[cardId].src)
        this.removeEventListener('click',flipCard)
        if(cardsChoosen.length==2){
            setTimeout(checkForMatch,3000)
        }
        console.log(cardsChoosen)
    }
    function checkForMatch(){
        if(cardsChoosen[1]==cardsChoosen[2]){
            console.log('this is done')
        }
    }
    createBoard()
})