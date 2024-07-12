$(document).ready(function () {
  const hello = $("p");

  function clickP() {
    console.log("클릭");
    $("p").text("클릭했구만");
  }

  // 하나의 이벤트만 등록
  $("p").click(clickP);

  // 여러개의 이벤트를 등록한다.
  $("p").on({
    mouseenter: function () {
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function () {
      $(this).css("background-color", "lightblue");
    },
    click: function () {
      $(this).css("background-color", "yellow");
    },
  });
});
