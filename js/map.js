// directions_in id end
$('.toshkent_maps__item__list .toshkent_maps__item').hide();
$('.toshkent_maps__item__list .toshkent_maps__item:first').show();
$('.toshkent_maps__item__map__svg path:first').addClass('active');

// Change tab class and display content
$('.toshkent_maps__item__map__svg path').on('click', function(event){
  event.preventDefault();
  $('.toshkent_maps__item__map__svg path').removeClass('active');
  $(this).parent().addClass('active');
  $('.toshkent_maps__item__list .toshkent_maps__item').hide();
  $($(this).attr('data-list')).show();
});

// -------------------------------===========-------------------------------

$(function(){
    let Catalog_max__pro__ul_link = document.querySelectorAll('.toshkent_maps__item__map__svg path');
  
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