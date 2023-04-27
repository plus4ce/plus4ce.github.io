var aboutus = document.querySelector('.aboutus');
var blog = document.querySelector('.blog');
var joinus = document.querySelector('.joinus');
function gotoAboutUs() {
    if (aboutus.style.display === "none") {
        aboutus.style.display = "block";
        blog.style.display = "none";
        joinus.style.display = "none";
    }
}
function gotoBlog() {
    if (blog.style.display === "none") {
        aboutus.style.display = "none";
        blog.style.display = "block";
        joinus.style.display = "none";
    }
}
function gotoJoinUs() {
    if (joinus.style.display === "none") {
        aboutus.style.display = "none";
        blog.style.display = "none";
        joinus.style.display = "block";
    }
}
