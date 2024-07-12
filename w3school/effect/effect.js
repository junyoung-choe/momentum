$(document).ready(function () {
  function clickShow() {
    $("p").show();
  }

  function clickHide() {
    $("p").hide();
  }

  // 위 두개의 기능을 하나의 토글로 대체한다.
  function clickToggle() {
    $("p").toggle();
  }

  function clickChain() {
    $("p").css("color", "red").slideUp(2000).slideDown(2000);
  }

  $("#show").click(clickShow);
  $("#hide").click(clickHide);
  $("#toggle").click(clickToggle);
  $("#chain").click(clickChain);
});
