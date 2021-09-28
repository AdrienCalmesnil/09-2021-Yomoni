const seeMore = document.querySelector('.seemore')
const seeLess = document.querySelector('.seeless')
const textToDisplay = document.querySelector('.added_text')

seeMore.addEventListener('click', function(){
    textToDisplay.style.display = 'block';
    seeLess.style.display = 'block'
    seeMore.style.display ='none';
})

seeLess.addEventListener('click', function(){
    textToDisplay.style.display = 'none';
    seeLess.style.display ='none';
    seeMore.style.display ='block';
})


