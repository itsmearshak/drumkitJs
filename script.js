const keyCode = document.querySelectorAll(".key-tone");
const audio = document.querySelectorAll("audio");
window.addEventListener("keypress", function (e) {
  let keydata = "";
  keyCode.forEach((el) => {
    const key = el.textContent.toLowerCase();
    if (e.key === key) {
      keydata = el.closest("div");
    }
  });
  audio.forEach((el) => {
    if (keydata === "") {
      return;
    }
    if (el.dataset.key === keydata.dataset.key) {
      el.play();
    }
  });
});
