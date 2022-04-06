$(document).ready(function(){
    // menu_btn
    $('.menu_btn').click(function(){
        $('header nav').animate({'right':0});
        $('html,body').css('overflow-y','hidden')
    });
    // close_btn
    $('.close_btn').click(function(){
        $('header nav').animate({'right':'-100vw'});
        $('html,body').css('overflow-y','visible')
    });
    // header nav ul 메뉴
    $('header nav>ul>li>a').click(function(){
        if($(this).attr('class')!='active'){
            $('header nav>ul>li>a').removeClass('active');
            $(this).addClass('active');
            $('header nav .sub').slideUp();
            $(this).next().slideDown();
            // next(): 클릭 이벤트가 발생힌 객체($(this))의 다음 형제 객체를 가리킴
        }else{
            $(this).removeClass('active');
            $(this).next().slideUp();
        }
    });
    // 메인 슬라이드
    var swiper = new Swiper(".mySwiper", {
        effect:'fade',
        loop:true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".mySwiper .swiper-pagination",
          clickable:true
        },
      });
    // 탭메뉴
    // 모두.tab_list안보임
      // 모든 .cab_list안보임
      $('.tab_list').hide();
      //첫번쩨 tab_list만 보임
      $('.tab_list').eq(0).fadeIn();
      // idx변수 선언
      var idx=0;

      $('.tab_title ul li').click(function(){
        // 클릭한 li의 인덱스 번호를 idx변수에 저장
        var idx=$(this).index();
        //  모든 li에서 active제거
        $('.tab_title ul li').removeClass('active');
        // 클릭힌 li만 active
        $(this).addClass('active');
        // 모든 .cab_list안보임
        $('.tab_list').hide();
        // idx변수의 값과 같은 인덱스 번호에 해당하는 tab_list만 보임
        $('.tab_list').eq(idx).fadeIn();
        return false;
      });
    //자동 텝메뉴
    var auto=setInterval(autoTab,4000);
    // autoTab함수 선언
    function autoTab(){
        // idx 변수의 값을 1씩 증가시킴
        idx++;
        // 만약 idx값ㅇ; 2보다 크면 0으로 초기화
        if(idx>2){idx=0;}
         //  모든 li에서 active제거
         $('.tab_title ul li').removeClass('active');
         // 클릭힌 li만 active
         $('.tab_title ul li').eq(idx).addClass('active');
         // 모든 .cab_list안보임
         $('.tab_list').hide();
         // idx변수의 값과 같은 인덱스 번호에 해당하는 tab_list만 보임
         $('.tab_list').eq(idx).fadeIn();
    }

     // s3 슬라이드
     var swiper2 = new Swiper(".mySwiper2", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl:".mySwiper2 .swiper-button-next",
            prevEl:".mySwiper2 .swiper-button-prev",
          },
      });
      //s4슬라이드
      var swiper3 = new Swiper(".mySwiper3", {
        loop:true,
        slidesPerView:1.3,
        spaceBetween:20,
        centeredSlides:true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".mySwiper3 .swiper-pagination",
          clickable:true
        },
      });
      // top버튼
      $('.top').click(function(){
        $('html,body').animate({'scrollTop':0});
        return false;
      });
      // window의 높이값을 winH변수에 저장
      var winH=$(window).height();
      // window에 scrool이벤트 설정
      $(window).scroll(function(){
        // window의 scrollTop값을 win변수에 저장
        var win=$(this).scrollTop();
        // 만약 win값이 0보다 커지면 header에 active추가
        if(win>0){
          $('header').addClass('active');
        }else{
          $('header').removeClass('active');
        }

        // 만약 win값이 window의 높이값보다 크면 top버튼 나타나고 ,window의 높이값보다 작으면 top사라짐
        if(win>winH){
          $('.top').addClass('active');
        }else{
          $('.top').removeClass('active');
        }
      });
});