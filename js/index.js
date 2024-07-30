$(document).ready(function () {
  // Toggle collapse functionality for individual FAQs
  $('.card-header').click(function () {
    $(this).next('.collapse').collapse('toggle');
  });

  // Toggle all FAQs open or closed
  var allOpen = false;
  $('#see-all-btn').click(function () {
    if (allOpen) {
      $('.collapse').collapse('hide');
      $(this).text('See All');
    } else {
      $('.collapse').collapse('show');
      $(this).text('Collapse All');
    }
    allOpen = !allOpen;
  });
});



// Calender date format
const calendarGrid = document.querySelector('.calendar-grid');
const monthYear = document.getElementById('month-year');
let currentDate = new Date();

function renderCalendar(date) {
  calendarGrid.querySelectorAll('.day').forEach(day => day.remove());

  const month = date.getMonth();
  const year = date.getFullYear();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  monthYear.textContent = date.toLocaleDateString('default', { month: 'long', year: 'numeric' });

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('day');
    calendarGrid.appendChild(emptyCell);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayCell = document.createElement('div');
    dayCell.classList.add('day');
    dayCell.textContent = i;
    calendarGrid.appendChild(dayCell);
  }
}

document.getElementById('prev-btn').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);


// JavaScript to toggle the search bar
document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const searchBar = document.getElementById("search-bar");

  searchIcon.addEventListener("click", function () {
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
      searchBar.style.display = "block";
    } else {
      searchBar.style.display = "none";
    }
  });
});


// Dark mode toggle
document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.getElementById('modeToggle');
  const logo = document.getElementById('logo');
  const lightLogoSrc = '../Images/logo.jpeg';
  const darkLogoSrc = '../Images/Revert-logo.png';  // Change this to the path of your dark mode logo

  modeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', modeToggle.checked);
    logo.src = modeToggle.checked ? darkLogoSrc : lightLogoSrc;
  });
});
