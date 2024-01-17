// function chat() {
//     $zopim.livechat.window.toggle();
// }

// function setCookie(name, value, days) {
//     const d = new Date();
//     d.setTime(d.getTime() + (days*24*60*60*1000));
//     let expires = "expires="+ d.toUTCString();
//     document.cookie = name + "=" + value + ";" + expires + ";path=/";
// }

// function getCookie(name) {
//     const nameEquals = name + '=';
//     const cookieArray = document.cookie.split(';');
  
//     for (cookie of cookieArray) {
//       while (cookie.charAt(0) == ' ') {
//         cookie = cookie.slice(1, cookie.length);
//       }
  
//       if (cookie.indexOf(nameEquals) == 0)
//         return decodeURIComponent(
//           cookie.slice(nameEquals.length, cookie.length),
//         );
//     }
  
//     return null;
// }



$(document).ready(function(){
    // setCookie('Package',"",30);
    // setCookie('Price',"",30);
    // setCookie('iptype',"",30);
    // setCookie('searchtype','Basic Federal Direct-Hit Search',30);
    // setCookie('searchprice',0,30);
    $('.slick-carou').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        pauseOnHover: true,
        dots: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }
        ]
      });
});

$(window).scroll(function(){
    if ($('#lp-faqs').offset().top-100 < $(window).scrollTop() && $('#lp-faqs').offset().top+100 > $(window).scrollTop()){
        $('.lp-list-item-menu li').removeClass('active');
        $('.lp-faqs-nav').addClass('active');
    }
    if ($('#lp-protect').offset().top-100 < $(window).scrollTop() && $('#lp-protect').offset().top+100 > $(window).scrollTop()){
      $('.lp-list-item-menu li').removeClass('active');
      $('.lp-how-nav').addClass('active');
    }
    if ($('#lp-pricing').offset().top-100 < $(window).scrollTop() && $('#lp-pricing').offset().top+100 > $(window).scrollTop()){
      $('.lp-list-item-menu li').removeClass('active');
      $('.lp-pricing-nav').addClass('active');
    }
  });
  
  let navpos = document.querySelector(".lp-nav-header");
  let rect = navpos.getBoundingClientRect();
  let sticky = document.querySelector(".lp-sticky-nav");
  
  window.addEventListener('scroll', () => {
      let navHeight = navpos.offsetHeight; // Consider the height of the navigation bar
      window.scrollY > (rect.top + navHeight) ? sticky.classList.add("active") : sticky.classList.remove("active");
  });

// function protection(id) {
//     setCookie('iptype',$('#'+id).find('select').val(),30);
//     setTimeout(function(){
//         window.location.href = window.location.origin+'/brief/';
//     },200);
// }

// function packagesel(price,package) {
//     setCookie('Package',package,30);
//     setCookie('Price',price,30);
//     setTimeout(function(){
//       window.location.href = window.location.origin+'/brief/';
//     },200);
// }

function nav(x,id) {
  $('.lp-list-item-menu li').removeClass('active');
  $('.'+$(x).parent('li').attr('class')).addClass('active');
  let box = document.getElementById(id);
  box.scrollIntoView();
}