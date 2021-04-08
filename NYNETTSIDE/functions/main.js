// Sidebytte effekt

window.onload = () => {
  const anchors = document.querySelectorAll('a');
  const transition_el = document.querySelector('.transition');

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 10);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;

      console.log(transition_el);

      transition_el.classList.add('is-active');

      console.log(transition_el);

      setInterval(() => {
        window.location.href = target;
      }, 500);
    })
  }
}

//Burgermeny

function openNav() {
  document.getElementById("mySidepanel").style.width = "50%";
  document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

$(".book").mouseenter(function () {
  $(this).parent(".book-wrap").addClass("rotate");
});

$(".book").mouseleave(function () {
  $(this).parent(".book-wrap").removeClass("rotate");
});

$(".book").click(function () {
  $(this).parent(".book-wrap").addClass("flip");
});

$(".book-back").click(function () {
  $(this).parent(".book-wrap").removeClass("flip");
});



