const searchButton = document.querySelector(".details__icons-navigation--icon");
const searchBar = document.querySelector(".search");
const searchClose = document.querySelector(".search__close-icon");

searchButton.addEventListener("click", () => {
    searchBar.classList.remove("search__hide");
    searchBar.classList.add("search__open");
    searchClose.classList.remove("hide");
    // searchClose.style.display = "block";
});

searchClose.addEventListener("click", () => {
    searchBar.classList.remove("search__open");
    searchBar.classList.add("search__hide");
    // searchClose.style.display = "none";
});