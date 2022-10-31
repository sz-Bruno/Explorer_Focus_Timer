const Minutes= document.querySelector('#minutes')
const Seconds= document.querySelector('#seconds')
const playButton= document.querySelector('.play')
const stopButton= document.querySelector('.stop')
const pauseButton=document.querySelector('.pause')
const plusButton= document.querySelector('.plus')
const lessButton= document.querySelector('.less')
const cronoButton=document.querySelector('.crono')
let forest= document.querySelector('#card1')
let rain= document.querySelector('#card2')
let coffe= document.querySelector('#card3')
let fire =document.querySelector('#card4')
let second
let minute
let clock
let audioForest =new Audio('./songs/forest.wav')
let audioRain =new Audio('./songs/rain.wav')
let audioCoffe =new Audio('./songs/coffe.wav')
let audioFire =new Audio('./songs/fire.wav')


cronoButton.addEventListener('click', function(){
    minute =Number(prompt('Quantos minutos?'))
    if(minute==''){
        minute=Number(alert('Digite um valor válido!'))
        return
    }
    Minutes.textContent=minute
    second=60
    cronoButton.classList.add('hide')
    playButton.classList.remove('hide')
})
playButton.addEventListener('click', function(){
   
    
    Count()
    stopButton.classList.remove('hide')
    pauseButton.classList.remove('hide')
    playButton.classList.add('hide')

})
stopButton.addEventListener('click', function(){
    playButton.classList.remove('hide')
    pauseButton.classList.add('hide')
    clearInterval(clock)
})
pauseButton.addEventListener('click', function(){
    
})
plusButton.addEventListener('click', function(){
    plus=Number(prompt('Qual tempo adicional?'))
    minute=minute+ plus
})
lessButton.addEventListener('click', function(){
    less=Number(prompt('Qual tempo a ser reduzido?'))
    minute=minute-less
})
function Count(){ 
    clock=setInterval(()=>{
        if(second>0){
        --second
        minute-1
        Minutes.textContent= (minute-1)<10? `0${minute-1}`:minute-1
        Seconds.textContent= (second)<10? `0${second}`:second
       }
       if(second<=0){
        second=60
        minute=minute-1
       }
       if(minute<=0){
        minute=0
        second=0
        playButton.classList.remove('hide')
        pauseButton.classList.add('hide')
       }

},1000)
             
} 

forest.addEventListener('click', function(){
     audioForest.play()
     audioRain.pause()
     audioCoffe.pause()
     audioFire.pause()
     audioForest.loop=true
})
rain.addEventListener('click',function(){
    audioRain.play()
    audioCoffe.pause()
    audioFire.pause()
    audioForest.pause()
    audioRain.loop=true
    
})
coffe.addEventListener('click',function(){
    audioCoffe.play()
    audioFire.pause()
    audioForest.pause()
    audioRain.pause()
    audioCoffe.loop=true
    
})
fire.addEventListener('click',function(){
    audioFire.play()
    audioForest.pause()
    audioRain.pause()
    audioCoffe.pause()
    audioFire.loop=true
    
})



