$(document).ready(function(){
  document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, options);
    });
  
    // Or with jQuery
  
    $(document).ready(function(){
      $('.modal').modal();
    });

    // -------------------------------------------------------------------

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, options);
    });
  
    // Or with jQuery
  
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
});

// -------------------------------===========-------------------------------

const listVideoItem = document.querySelector('.videoGallery__menu__video');
if(listVideoItem){
  const videoItem = listVideoItem.querySelectorAll('.videoGallery__item__video');
  const maxVideo = document.querySelector('.videoGallery__list__item a')
  const videoItemImg = document.querySelector('.videoGallery__list__item .videoItem')
  const videoItemTitele = document.querySelector('.videoGallery__list__item h3')
  
  videoItem.forEach(i => {
    i.onclick = () =>{
      const videoHref = i.querySelector('.videoGallery__item__video a');
      const videoImg = i.querySelector('.videoGallery__item__video .videoImg');
      const videoTitle = i.querySelector('.videoGallery__item__video h3');

      let maxVideoList = maxVideo.href = videoHref.href
      let maxvideoItemImg = videoItemImg.src = videoImg.src
      let mrxTitle = videoItemTitele.textContent = videoTitle.textContent
    }
  })
}

// -------------------------------===========-------------------------------

$(function(){
    let Catalog_max__pro__ul_link = document.querySelectorAll('.videoGallery__item__video');
  
    for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
        Catalog_max__pro__ul_link[i].addEventListener('click',function(){
            for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
                Catalog_max__pro__ul_link[j].classList.remove('active');
            }
            this.classList.add('active');
  
        })
    }
});
  
// -------------------------------===========-------------------------------

// directions_in id end
$('.memoriy_carousel__cart__list .memoriy_carousel__cart__item').hide();
$('.memoriy_carousel__cart__list .memoriy_carousel__cart__item:first').show();
$('.memoriy_carousel__menu li:first').addClass('active');

// Change tab class and display content
$('.memoriy_carousel__menu a').on('click', function(event){
  event.preventDefault();
  $('.memoriy_carousel__menu li').removeClass('active');
  $(this).parent().addClass('active');
  $('.memoriy_carousel__cart__list .memoriy_carousel__cart__item').hide();
  $($(this).attr('href')).show();
});


// -------------------------------===likes===-------------------------------

const likesCart = document.querySelector('.memoriy_carousel__cart__likes');
const likes = document.querySelector('.memoriy_carousel__botton');
const counter = document.querySelector('.memoriy_carousel__counter');

if(likesCart){
  likes.onclick = () => { 
    if(likes.className == 'memoriy_carousel__botton'){
      likes.classList.add('active')
      counter.textContent++
    }
    else if(likes.className == 'memoriy_carousel__botton active'){
      likes.classList.remove('active')
      counter.textContent--
    }
  }
}

// -------------------------------===likes===-------------------------------

$(function(){
  let Catalog_max__pro__ul_link = document.querySelectorAll('.news__pagination__link');

  for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
      Catalog_max__pro__ul_link[i].addEventListener('click',function(){
          for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
              Catalog_max__pro__ul_link[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});

// -------------------------------===========-------------------------------

const buttons_1 = document.querySelectorAll('.olimlar_in__open');
buttons_1.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('active');
    
    buttons_1.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('active');
      }
    });
  });
});

// -------------------------------===========-------------------------------