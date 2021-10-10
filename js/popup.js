window.addEventListener('DOMContentLoaded', function() { 
 
 
 // Появление модального окна в секции галерея
  document.querySelectorAll('.galery__image-slider').forEach(function(imgBtn){
    imgBtn.addEventListener('click', function(imgBtnEvents){
      const pathpopup = imgBtnEvents.currentTarget.dataset.path
      document.querySelector(`[data-target="${pathpopup}"]`).classList.add('galery__popup--active')
      document.querySelector('.body').classList.add('fix')
      document.addEventListener('click', function(missDrop){
        if (missDrop.target.classList.contains('galery__popup--active')){
          document.querySelector(`[data-target="${pathpopup}"]`).classList.remove('galery__popup--active')
          document.querySelector('.body').classList.remove('fix')
        }
      })
      document.querySelectorAll('.galery__popup-btn').forEach(function(ppBtn){
        console.log('.galery__popup-btn')
        ppBtn.addEventListener('click', function(){
          document.querySelectorAll('.galery__popup').forEach(function(poPup){
            poPup.classList.remove('galery__popup--active')
            document.querySelector('.body').classList.remove('fix')
          })
        })
      })
    })
  })
  
});