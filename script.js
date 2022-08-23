const ipt = document.querySelector(".ipt");
const btn = document.querySelector(".btn");
const frm = document.querySelector(".frm");

btn.addEventListener("click", (e) => {
  if (!ipt.value.length) {
    e.preventDefault();
    frm.classList.toggle("close");
  } else {
    setTimeout(() => {
      ipt.value = "";
    }, 300);
  }
});

//need a setTimeout to prevent instant empty input value
