'use strict';


function updateClock() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  
  // Tambahkan nol di depan jika jam kurang dari 10
  if (hours < 10) {
    hours = '0' + hours;
  } 

  // Tambahkan nol di depan jika menit kurang dari 10
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  // Format waktu menjadi string
  const formattedTime = `${hours}:${minutes}`;

  // AM atau PM
  let ampm = hours >= 12 ? 'AM' : 'PM';

  const clockElement = document.getElementById('clock');
  if (clockElement) {
    clockElement.style.color = 'rgb(11, 2, 77)';
    // Tampilkan waktu di elemen dengan id 'clock'
    clockElement.innerHTML = `${formattedTime} ${ampm}`;
  }

  // Mengubah format jam ke 12 jam
  if (hours > 12) {
    hours -= 12
  } 
}

setInterval(updateClock, 60000);

updateClock();

//update date
const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentDate = new Date();
const currentDay = currentDate.getDay()
const currentDayName = day[currentDay];
const currentMonth = month[currentDate.getMonth()];
const currentYear = currentDate.getFullYear();


const fullDate = `${currentDayName}, ${currentDate.getDate()} ${currentMonth} ${currentYear}`;
document.getElementById('date').innerHTML = fullDate;
//update date in html


//infinte scroll hero footer

function infiniteSlider() {
  const services = [
    'Logo Design',
    'Mascot Illustration',
    'Website Design',
    'Branding Design',
    'Employee Branding',
    'Technical SEO',
    'Brand Strategy',
    'Website Development',
  ];
  
  const heroSlider = document.querySelector('.js-running-list');
  // ... adalah spread operator yang digunakan untuk menggabungkan dua array menjadi satu.
  // Dalam hal ini, kita menggabungkan array services dengan dirinya sendiri untuk membuat daftar yang berulang.
  // Ini memungkinkan kita untuk membuat daftar yang lebih panjang tanpa harus menulis ulang elemen yang sama.
  const sliderService = [...services, ...services];

  sliderService.forEach((service) => {
    const li = document.createElement('li');
    li.className = 'list';
    li.innerHTML = `<span style="color: rgb(228, 110, 20)">/</span> ${service} <span style="color: rgb(228, 110, 20)">/</span>`;
    
    heroSlider.appendChild(li);
    // Menambahkan elemen <li> ke dalam elemen dengan class 'js-running-list'
    // Ini akan membuat daftar layanan yang dapat digulir secara horizontal.
  });
}

infiniteSlider();

//dynamic text hero
const textList = [
  "Branding",
  "Mascot",
  "SEO",
  "Website",
  "Logo",
  "Strategy",
];

let i = 0;
const textEl = document.getElementById("dynamic-text");

textEl.style.color = 'rgb(228, 110, 20)';


setInterval(() => {
  //perbarui i untuk teks berikutnya
  i = (i + 1) % textList.length;

  //ubah teks elemen dengan teks baru
  textEl.innerText = textList[i];
}, 1800);



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

function scrollToForm() {
  const targetSections = document.querySelector('.js-form-section');
  if (targetSections) {
    targetSections.scrollIntoView({
      behavior: 'smooth',
    });
  }
}


function scrollToPortfolio() {
  const targetSections = document.querySelector('.js-portfolio-section');
  if (targetSections) {
    targetSections.scrollIntoView({
      behavior: 'smooth',
      inline: 'nearest'
    });
  }
}

function scrollToAbout() {
  const targetSections = document.querySelector('.js-portfolio-CTA');
  if (targetSections) {
    targetSections.scrollIntoView({
      behavior: 'smooth',
      inline: 'nearest'
    });
  }
}

function scrollToServices() {
  const targetSections = document.querySelector('.js-services-section');
  if (targetSections) {
    targetSections.scrollIntoView(
      {
        behavior: 'smooth',
        inline: 'nearest'
      }
    )
  }
}


