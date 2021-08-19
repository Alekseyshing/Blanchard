window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalogue__fl-btn').forEach(function(tabsBtn1){
    tabsBtn1.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalogue__description').forEach(function(catalogueDescription) {
        catalogueDescription.classList.remove('catalogue__description-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalogue__description-active')
    })
  })

  document.querySelectorAll('.catalogue__persons-btn').forEach(function(tabsBtn2){
    console.log(tabsBtn2);
    tabsBtn2.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalogue__article').forEach(function(catalogueArticle) {
        catalogueArticle.classList.remove('catalogue__article-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalogue__article-active')
    })

  document.querySelectorAll('.catalogue__fl-btn').forEach(function(catalogueBtn) {
    catalogueBtn.addEventListener('click',  function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalogue__fl-btn').forEach(function(catalogueBtn) {
        catalogueBtn.classList.remove('catalogue__fl-btn-active')
      })
    })

    catalogueBtn.addEventListener('click',  function (event) {
      event.currentTarget.classList.add('catalogue__fl-btn-active')
     })
    });

    document.querySelector('#events-btn').addEventListener('click', function() {
      document.querySelectorAll('.events__articles-content').forEach(function(articlesContent) {
        articlesContent.classList.add('events__articles-content-active')
      })

      document.querySelectorAll('.events__all-events-btn').forEach(function(eventsBtn) {
        eventsBtn.classList.add('events__btn-inactive')
      })
    });

    document.querySelector('#select-1').addEventListener('click', function() {
      document.querySelector('#scroll-bar-1').classList.add('header__scroll-1-inactive')
    })


    document.querySelectorAll('.catalogue__persons-btn').forEach(function(descriptionStep) {
      descriptionStep.addEventListener('click',  function (event) {
        const path = event.currentTarget.dataset.path
        document.querySelectorAll('.catalogue__persons-btn').forEach(function(descriptionStep) {
          descriptionStep.classList.remove('catalogue__persons-btn-active')
      })
    })
    
       descriptionStep.addEventListener('click',  function (event) {
        event.currentTarget.classList.add('catalogue__persons-btn-active')
       })

  })

      const nav1 = document.querySelector('.header__scroll-1') // находим окно навигации
        
      window.addEventListener('click', e => { // при клике в любом месте окна браузера
        const target = e.target // находим элемент, на котором был клик
        if (!target.closest('header__scroll-1') && !target.closest('#select-1')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
          nav1.classList.remove('header__scroll-1-inactive') // то закрываем окно навигации, удаляя активный класс
        }
      })

      document.querySelector('#select-2').addEventListener('click', function() {
        document.querySelector('#scroll-bar-2').classList.add('header__scroll-1-inactive')
      })
  
        const nav2 = document.querySelector('.header__scroll-2') // находим окно навигации
          
        window.addEventListener('click', e => { // при клике в любом месте окна браузера
          const target = e.target // находим элемент, на котором был клик
          if (!target.closest('header__scroll-2') && !target.closest('#select-2')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
            nav2.classList.remove('header__scroll-1-inactive') // то закрываем окно навигации, удаляя активный класс
          }
        })

        document.querySelector('#select-3').addEventListener('click', function() {
          document.querySelector('#scroll-bar-3').classList.add('header__scroll-1-inactive')
        })
    
          const nav3 = document.querySelector('.header__scroll-3') // находим окно навигации
            
          window.addEventListener('click', e => { // при клике в любом месте окна браузера
            const target = e.target // находим элемент, на котором был клик
            if (!target.closest('header__scroll-3') && !target.closest('#select-3')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
              nav3.classList.remove('header__scroll-1-inactive') // то закрываем окно навигации, удаляя активный класс
            }
          })
        
          document.querySelector('#select-4').addEventListener('click', function() {
            document.querySelector('#scroll-bar-4').classList.add('header__scroll-1-inactive')
          })
      
            const nav4 = document.querySelector('.header__scroll-4') // находим окно навигации
              
            window.addEventListener('click', e => { // при клике в любом месте окна браузера
              const target = e.target // находим элемент, на котором был клик
              if (!target.closest('header__scroll-4') && !target.closest('#select-4')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
                nav4.classList.remove('header__scroll-1-inactive') // то закрываем окно навигации, удаляя активный класс
              }
            })

            document.querySelector('#select-5').addEventListener('click', function() {
              document.querySelector('#scroll-bar-5').classList.add('header__scroll-1-inactive')
            })
        
              const nav5 = document.querySelector('.header__scroll-5') // находим окно навигации
                
              window.addEventListener('click', e => { // при клике в любом месте окна браузера
                const target = e.target // находим элемент, на котором был клик
                if (!target.closest('header__scroll-5') && !target.closest('#select-5')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
                  nav5.classList.remove('header__scroll-1-inactive') // то закрываем окно навигации, удаляя активный класс
                }
              })


    tippy.setDefaultProps({
      duration: 400,
      delay: 80,
      arrow:  true,
      inertia: true,
    });

    tippy('#myButton-1', {
      content: 'Пример современных тенденций - современная методология разработки',
      theme: 'light-1',
    });

    tippy('#myButton-2', {
      content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
      theme: 'light-2',
    });

    
    tippy('#myButton-3', {
      content: 'В стремлении повысить качество',
      theme: 'light-3',
    });

    function scrollTo(element) {
      window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
      })
    }

    var a = document.querySelector('.hero__btn')
    var myMap = document.querySelector('#myMap')
    
    a.addEventListener('click', () => {
      scrollTo(myMap);
    })
    
    var a = document.querySelector('.header__nav-link-about')
    var aboutUs = document.querySelector('#about-us')
    
    a.addEventListener('click', () => {
      scrollTo(aboutUs);
    })

    var a = document.querySelector('.header__nav-link-galery')
    var galery = document.querySelector('#galery')
    
    a.addEventListener('click', () => {
      scrollTo(galery);
    })

    var a = document.querySelector('.header__nav-link-catalogue')
    var catalogue = document.querySelector('#catalogue')
    
    a.addEventListener('click', () => {
      scrollTo(catalogue);
    })

    var a = document.querySelector('.header__nav-link-events')
    var events = document.querySelector('#events')
    
    a.addEventListener('click', () => {
      scrollTo(events);
    })

    var a = document.querySelector('.header__nav-link-editions')
    var editions = document.querySelector('#editions')
    
    a.addEventListener('click', () => {
      scrollTo(editions);
    })

    var a = document.querySelector('.header__nav-link-projects')
    var projects = document.querySelector('#projects')
    
    a.addEventListener('click', () => {
      scrollTo(projects);
    })

    var a = document.querySelector('.header__nav-link-contacts')
    var contacts = document.querySelector('#contacts')
    
    a.addEventListener('click', () => {
      scrollTo(contacts);
    })

    const swiper1 = new Swiper('#swiper-1', {
      // Optional parameters
      loop: true,
      slideActiveClass: 'hero__swiper-slide-active',

      autoplay: {
        delay: 7000,
      },
      
      effct:'fade',

      fadeEffect: {
        crossFade: true
      },

      speed: 1000,

      pagination: {
        el: 'swiper-pagination',
        clickable: true,
      }
    });  

  const swiper2 = new Swiper('#swiper-2', {
    loop: false,
    loopedSlides: 12,
    autoheight: false,
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 6,
    slidesPerColumn: 2,
    zoom: true,

  
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
     },

     navigation: {
      disabledClass: 'swiper-button-disabled',
     },

    zoom: {
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
    },
  
    navigation: {
      nextEl: '.galery__button-next',
      prevEl: '.galery__button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
      allowTouchMove: true,
    },
  });

   const swiper3 = new Swiper('#swiper-3', {
    loop: true,
    loopedSlides: 3,
    autoheight: false,
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    zoom: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,
    },

    zoom: {
      maxRatio: 2,
      minRatio: 1,
      toggle: true,
    },

    navigation: {
      nextEl: '.editions__button-next',
      prevEl: '.editions__button-prev',
    },
   });

   const swiper4 = new Swiper('#swiper-4', {
    // Optional parameters
    autoheight: false,
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    zoom: true,
    slideToClickedSlide: true,

    navigation: {
      nextEl: '.projects__button-next',
      prevEl: '.projects__button-prev',
    },
   });
  });

  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("myMap", {
      center: [55.758,37.62],
      zoom: 15
    });

      var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, { 
        iconLayout: 'default#image',
        iconImageHref: 'map-point.svg',
        iconImageSize: [20,20],
        iconImageOffset: [0,0],
        arrow: true,
      });

    myMap.geoObjects.add(myPlacemark); 
  }

  $( function() {
    $( ".catalogue__accordion" ).accordion({
      animate: true,
      active: 0,
      collapsible: true,
      heightStyle: 'content', 
    });
  });
  const element = document.querySelector('select');
   const choices = new Choices(element, {
    searchEnabled: false,
    flippedState: 'is-flipped',
    itemSelectText: '',
  });

  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  
  im.mask(selector);

  new JustValidate('.contacts__form', {    
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
        strength: {
          custom: '^[a-zA-Zа-яА-Я]+$'
      }
    },

      tel: {
      required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          console.log(phone)
          return Number(phone) && phone.length === 10
        },

    },
  },
  messages: {
    name: 'Недопустимый формат',
    tel: 'Это обязательное поле',
  },
  colorWrong: '#d11616'
  
});
});

