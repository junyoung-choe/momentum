$(document).ready(function () {
  function clickBtn1() {
    alert($("p").text());
  }

  function clickBtn2() {
    alert($("p").html());
    // $("p").text("111");
    // $("p").value("text", "111");
  }

  $("#btn1").click(clickBtn1);
  $("#btn2").click(clickBtn2);
});
