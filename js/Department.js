// script.js
document.addEventListener('DOMContentLoaded', function () {
    var mainItems = document.querySelectorAll('.main-item');

    mainItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            var subList = this.nextElementSibling;

            if (subList && subList.classList.contains('sub-list')) {
                subList.style.display = subList.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});


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
