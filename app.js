const clockContainer = document.querySelector(".clock__container");
const getDate = () => {
  const data = new Date();
  const year = data.getFullYear();
  const month = data.getMonth();
  const day = data.getDay();
  const hour = data.getHours() < 10 ? "0" + data.getHours() : data.getHours();
  const minute =
    data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes();
  const seconds =
    data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds();
  return `${day}/${month}/${year} ${hour}:${minute}:${seconds}`;
};
const setTimeOnScreen = () => {
  clockContainer.innerHTML = getDate();
};
setInterval(setTimeOnScreen, 1000);
