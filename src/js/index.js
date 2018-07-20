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

// SMOOTH SCROLL

// Scroll function that animates the move to each section
function scrollTo(element, to, duration) {
  if (duration <= 0) {
    return;
  }
  const difference = to - window.scrollY;
  const dest = difference / duration * 10;

  if (dest) {
    setTimeout(() => {
      window.scroll(0, window.scrollY + dest);
      if (window.scrollY === to) {
        return;
      }
      scrollTo(element, to, duration - 10);
    }, 10);
  }
}

// Calls scrollTo function with the corresponding id
function navClick(navId) {
  navId = navId ? navId.toLowerCase() : 'home';
  const section = document.getElementById(navId);
  scrollTo(document.body, section.offsetTop, 500);
}

// Click events for nav elements
const nav = document.querySelectorAll('li');
for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener('click', (e) => {
    navClick(e.target.innerText);
  }, false);
}