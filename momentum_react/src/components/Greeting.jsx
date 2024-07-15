import React, { useState, useEffect } from "react";

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function Greeting() {
  const [username, setUsername] = useState(
    localStorage.getItem(USERNAME_KEY) || ""
  );
  const [isLoggedIn, setIsLoggedIn] = useState(!!username);

  useEffect(() => {
    if (isLoggedIn) {
      const savedUsername = localStorage.getItem(USERNAME_KEY);
      if (savedUsername) {
        setUsername(savedUsername);
      }
    }
  }, [isLoggedIn]);

  const onLoginSubmit = (event) => {
    event.preventDefault();
    const usernameThatTheUserWrote = event.target.username.value;
    localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
    setUsername(usernameThatTheUserWrote);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <form id="login-form" onSubmit={onLoginSubmit}>
        <input
          name="username"
          required
          maxLength="15"
          type="text"
          placeholder="What is your name?"
        />
        <input type="submit" value="Log In" />
      </form>
    );
  }

  return <h1 id="greeting">Hello, {username}!</h1>;
}

export default Greeting;
