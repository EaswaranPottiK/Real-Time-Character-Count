textBox = document.getElementById('textBox')
totalCharaters = document.getElementById('totalCharaters')
remaining = document.getElementById('remaining')


textBox.addEventListener('keydown',function(){
    totalCharaters.innerText= textBox.value.length+1;
    remaining.innerText = 50 - parseInt(totalCharaters.innerText) 
})