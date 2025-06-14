//dynamix-text_about
const skillList = [
  'experts',
  'creatives',
  'strategists',
  'designers',
  'developers',
  'marketers',
]

let index = 0;
const textElement = document.getElementById("dynamic-text_about");
textElement.innerText = skillList[index];
textElement.style.color = 'rgb(228, 110, 20)';

setInterval(() => {
    index = (index + 1) % skillList.length;
    textElement.innerText = skillList[index]; 
  }, 1500);


  function scrollToForm() {
    const targetSections = document.querySelector('.js-form-section');
    if (targetSections) {
      targetSections.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

//back to top button
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top');

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })
}

backToTop();