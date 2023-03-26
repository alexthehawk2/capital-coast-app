export const getCookie = (name) => {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const [cookieName, cookieValue] = cookies[i].split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
};
export const toggleToaster = (message, stateSetterFN) => {
  stateSetterFN(message);
  setTimeout(() => {
    stateSetterFN(false);
  }, 2000);
};
