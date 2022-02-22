
// Changes the progress bar while scrolling
// https://shoelace.style/components/progress-bar

window.onscroll = function() {
  changeProgressBarValue();
};

function changeProgressBarValue() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementsByTagName("sl-progress-bar")[0].value = scrolled;
}

// https://shoelace.style/components/switch
const switchElement = document.getElementsByTagName("sl-switch")[0];

// Adding a listener to change the HTML when the switch is clicked
switchElement.addEventListener('sl-change', function (e) {
  const isChecked = e.target.checked;
  const myChoiceDiv = document.getElementById('my-choice');
  const myChoiceTitle = document.getElementById('switch-title');
  const myChoiceSubtitle = document.getElementById('switch-subtitle');
  const backImg1 = document.getElementsByClassName('back-img')[0];
  const backImg2 = document.getElementsByClassName('back-img')[1];
  if (isChecked) {
    myChoiceDiv.classList.remove('switch-off');
    myChoiceDiv.classList.add('switch-on');
    myChoiceTitle.innerText = 'You are no longer in the dark...';
    myChoiceSubtitle.innerText = '';
    backImg1.src = './images/back-to-top-on.png';
    backImg2.src = './images/back-to-top-on.png';
  } else {
    myChoiceDiv.classList.remove('switch-on');
    myChoiceDiv.classList.add('switch-off');
    myChoiceTitle.innerText = 'MY CHOICE';
    myChoiceSubtitle.innerText = 'Ready to turn on the light?';
    backImg1.src = './images/back-to-top-off.png';
    backImg2.src = './images/back-to-top-off.png';
  }
});

// Enable tooltips. Source https://getbootstrap.com/docs/5.1/components/tooltips/#example-enable-tooltips-everywhere
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
