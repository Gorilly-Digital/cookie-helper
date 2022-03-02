module.exports = (function CookieHelper() {
  const setCookie = function (name, val, duration) {
      const value = val;
      if(!duration) {
        const date = new Date();
        // Set it expire in 7 days
        date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
        duration = date;
      }

    // Set it
    document.cookie =
      name + "=" + value + "; expires=" + duration.toUTCString() + "; path=/";
  };

  const getCookie = function (name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (!parts) {
      return null;
    }
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
    return null;
  };

  const deleteCookie = function (name) {
    const date = new Date();

    // Set it expire in -1 days
    date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);

    // Set it
    document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
  };
  return {
    setCookie: setCookie,
    getCookie: getCookie,
    deleteCookie: deleteCookie,
  };
})();
