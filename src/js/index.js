const header = document.getElementById('header');
const height = window.innerHeight - 100;

function stickyHeader() {
  if (window.pageYOffset > height) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function () {
  stickyHeader();
};