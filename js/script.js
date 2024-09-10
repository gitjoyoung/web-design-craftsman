$(function () {
  // 탭 메뉴
  $(".tabmenu li").click(function () {
    $(".tabmenu li").removeClass("on");
    $(this).addClass("on");
    var i = $(this).index();
    console.log(i);
    $(".tabcon").hide();
    $(".tabcon").eq(i).show();
    return false;
  });
  // 팝업 열기
  $(".pp").click(function () {
    $(".popup").show();
    $(".popup").show();
    return false;
  });
  // 팝업 닫기
  $(".popup button").click(function () {
    $(".popup").hide();
  });

  // 메뉴 마우스 오버
  $("nav>ul>li").mouseenter(function () {
    $(".sub").stop().slideDown();
  });
  // 메뉴 마우스 아웃
  $("nav>ul>li").mouseleave(function () {
    $(".sub").stop().slideUp();
  });

  // 배너 슬라이드
  var t = 0;
  function slide() {
    if (t < 2) {
      t++;
    } else {
      t = 0;
    }
    $(".slide ul").animate({ top: t * 300 * -1 + "px" }, 1000);
  }
  // 2초마다 slide 함수 실행
  setInterval(slide, 2000);
});
