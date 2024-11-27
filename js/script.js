document.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    var scrolled = window.scrollY;

    if (scrolled > 50) {
        header.style.backgroundColor = "black";
    } else {
        header.style.backgroundColor = "green";
    }
});