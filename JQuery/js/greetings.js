$(document).ready(function () {
  const loginForm = $("#login-form");
  const loginInput = $("#login-form").find("input");
  const greeting = $("#greeting");

  const HIDDEN_CLASSNAME = "hidden";
  const USERNAME_KEY = "username";

  function onLoginSubmit(event) {
    // 기본 동작 막기
    event.preventDefault();
    const usernameThatTheUserWrote = loginInput.val();
    loginForm.addClass(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
    paintGreetings();
  }

  function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.text(`Hello ${username}`);
    greeting.removeClass(HIDDEN_CLASSNAME);
  }

  const savedUsername = localStorage.getItem(USERNAME_KEY);
  // console.log(savedUsername);

  //즉 로컬스토리지에 로그인 기록이 없을때만 리스너를 등록하는것
  if (savedUsername == null) {
    // show the form
    loginForm.removeClass(HIDDEN_CLASSNAME);
    loginForm.on("submit", onLoginSubmit);
  } else {
    // show the greetings
    paintGreetings();
  }
});
