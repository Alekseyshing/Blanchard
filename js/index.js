window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('header__nav--is-active')
    document.querySelector('.header__burger').classList.toggle('header__burger--active')
  })

  const params = {
    btnClassName: "header__select",
    activeClassName: "header__drop-is-active",
    disabledClassName: "header__drop-is-disabled"
  }
  
  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }
  
  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.activeClassName}`);
  
      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }
  
      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`[data-target="${path}"]`);
  
        btn.classList.toggle(params.activeClassName);
  
        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }
  
  setMenuListener();

    document.querySelector('#search-btn').addEventListener('click', function() {
    document.querySelector('#search-form').classList.toggle('header__search-menu-active')
    document.querySelector('#search-btn').classList.toggle('header__search-btn-epsent')
  })

  const button = document.querySelector('#search-btn') // находим кнопку для открытия/закрытия окна навигации
  const nav = document.querySelector('#search-form') // находим окно навигации

  window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.header__search-menu') && !target.closest('.header__search-btn') && !target.closest('.header__input')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      nav.classList.remove('header__search-menu-active') // то закрываем окно навигации, удаляя активный класс
      document.querySelector('#search-btn').classList.remove('header__search-btn-epsent')
    }
  })


  document.querySelectorAll('.catalogue__fl-btn').forEach(function(tabsBtn1){
    tabsBtn1.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalogue__description').forEach(function(catalogueDescription) {
        catalogueDescription.classList.remove('catalogue__description--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalogue__description--active');
            // Обновляем аккордионы
            $('.catalogue__accordion').accordion("refresh");
    })
    // $( ".catalogue__accordion" ).accordion();
  })

 


  document.querySelectorAll('.catalogue__persons-btn').forEach(function(tabsBtn2){
    console.log(tabsBtn2);
    tabsBtn2.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalogue__article').forEach(function(catalogueArticle) {
        catalogueArticle.classList.remove('catalogue__article--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalogue__article--active')
    })

  document.querySelectorAll('.catalogue__fl-btn').forEach(function(catalogueBtn) {
    catalogueBtn.addEventListener('click',  function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalogue__fl-btn').forEach(function(catalogueBtn) {
        catalogueBtn.classList.remove('catalogue__fl-btn--active')
      })
    })

    catalogueBtn.addEventListener('click',  function (event) {
      event.currentTarget.classList.add('catalogue__fl-btn--active')
     })
    });

      // Открыть оставшиеся карточки в секции События
    document.querySelector('.events__all-events-btn').addEventListener('click', function() {
      document.querySelectorAll('.events__articles-content').forEach(function(articlesContent) {
        articlesContent.classList.add('events__articles-content-active')
      })

      document.querySelectorAll('.events__all-events-btn').forEach(function(eventsBtn) {
        eventsBtn.classList.add('events__btn-inactive')
      })
    });

const fadeIn = (el, timeout, display) => {
      el.style.opacity = 0;
      el.style.display = display || 'block';
      el.style.transition = `opacity ${timeout}ms`;
      setTimeout(() => {
        el.style.opacity = 1;
      }, 10);
    };

    const fadeOut = () => {
      
    };

    const block = document.querySelector('.events__articles-content--four');
    const block1 = document.querySelector('.events__articles-content--five');
    const block2 = document.querySelector('.events__articles-content--third');
    const btn = document.querySelector('.events__all-events-btn');

    btn.addEventListener('click', (event) => {
      let display = event.currentTarget.style.display
      if (display = 'none') {
        fadeIn(block, 1000, 'flex');
      } else {
        fadeOut();
      }
      if (display = 'none') {
        fadeIn(block1, 1000, 'flex');
      } else {
        fadeOut();
      }
      if (display = 'none') {
        fadeIn(block2, 1000, 'flex');
      } else {
        fadeOut();
      }
    })

    document.querySelectorAll('.catalogue__persons-btn').forEach(function(descriptionStep) {
      descriptionStep.addEventListener('click',  function (event) {
        const path = event.currentTarget.dataset.path
        document.querySelectorAll('.catalogue__persons-btn').forEach(function(descriptionStep) {
          descriptionStep.classList.remove('catalogue__persons-btn--active')
      })
    })
       descriptionStep.addEventListener('click',  function (event) {
        event.currentTarget.classList.add('catalogue__persons-btn--active')
       })
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
      slideActiveClass: 'hero__swiper-slide-active',
      effct: 'fade',
      speed: 2500,
      
      fadeEffect: {
        crossFade: true
      },

      autoplay: {
        delay: 3000,
      },
      
      pagination: {
        el: 'swiper-pagination',
        clickable: true,
      }
    });  

  const swiper2 = new Swiper('#swiper-2', {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,

    breakpoints: {
      441: {
        slidesPerView: 2,
        grid: {
          rows: 2
        },
        spaceBetween: 30,
        slidesPerGroup: 2,
      },
  
      1200: {
        slidesPerView: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 50,
        slidesPerGroup: 6,
      }
    },
  
    a11y: false,

    pagination: {
      el: '.galery__swiper-pagination',
      type: 'fraction',
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
    loop: false,
    autoheight: false,
    zoom: true,

    breakpoints: {
      1024: {
        loopedSlides: 2,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },


      1310: {
        loopedSlides: 3,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },

    pagination: {
      el: '.editions__swiper-pagination',
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
    zoom: true,
    slideToClickedSlide: true,
    
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 15,
        slidesPerGroup: 2,
      },

      1700: {
        slidesPerView: 3,
        spaceBetween: 45,
        slidesPerGroup: 3,
      },
    },

    navigation: {
      nextEl: '.projects__button-next',
      prevEl: '.projects__button-prev',
    },
   });
  });

  // const swiper5 = new Swiper('#swiper-5', {
  //   // Optional parameters
  //   loop: true,
  //   slidesPerView: 2,
  //   spaceBetween: 50,
  //   slidesPerGroup: 3,

  //   grid: {
  //     rows: 2,
  //     fill: 'column',
  //   },
    
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  //   navigation: {
  //     nextEl: '.events__button-next',
  //     prevEl: '.events__button-prev',
  //   },
  //  });

   function mobileSlider() {
    if (window.innerWidth <= 740 && slider.dataset.mobile == "false") {
      mySwiper = new Swiper(slider, {
        containerModifierClass: '#swiper-5',
        wrapperClass: 'events__articles',
        slideClass: 'events__articles-content',
        speed: 400,
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      slider.dataset.mobile = "true";
    }

    if (window.innerWidth > 740) {
      slider.dataset.mobile = "false";
      if (slider.classList.contains('swiper-container--eventsinitialized')) {
        mySwiper.destroy();
      }
    }
  }

  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("myMap", {
      center: [55.75846806898367, 37.60108849999989], 
      zoom: 15,
      controls: ['geolocationControl', 'zoomControl'],
    },
    { 
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "100px", right: "20px" },
   });

      var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, { 
        iconLayout: 'default#image',
        iconImageHref: 'map-point.svg',
        iconImageSize: [20,20],
        iconImageOffset: [-10, -20],
        arrow: true,
      });

    myMap.geoObjects.add(myPlacemark); 
  }

  $( function() {
    $( ".catalogue__accordion" ).accordion({
      animate: true,
      active: 0,
      collapsible: true,
      icons: false,
      heightStyle: "content",
      autoheight: false,
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

