const doLogin = (username) => {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("isLoggedIn", true);
  };
  const isLoggedIn = () => {
    return Boolean(sessionStorage.getItem("isLoggedIn"));
  };
  const handleLogout = (props) => {
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    props.history.push("/");
  };
  export default {
    doLogin,
    isLoggedIn,
    handleLogout
  };
  