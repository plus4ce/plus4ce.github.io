var HomePage = $(".HeadPage");
var Blog = $(".Blog");
var JoinUs = $(".JoinUs");
var NKSoftStudio = $(".nkSoftStudio");
function goto_HeadPage() {
        HomePage.css("border-bottom", "#d8d8d8 solid 5px");
        HomePage.siblings("div").css("border-bottom", "none");

        HomePage.css("display", "block");
        HomePage.siblings("div").css("display", "none");
}
function goto_Blog() {
        Blog.css("border-bottom", "#d8d8d8 solid 5px");
        Blog.siblings("div").css("border-bottom", "none");

        Blog.css("display", "block");
        Blog.siblings("div").css("display", "none");
}
function goto_JoinUs() {
        JoinUs.css("border-bottom", "#d8d8d8 solid 5px");
        JoinUs.siblings("div").css("border-bottom", "none");

        JoinUs.css("display", "block");
        JoinUs.siblings("div").css("display", "none");
}
function goto_NKSoftStudio() {
        NKSoftStudio.css("border-bottom", "#d8d8d8 solid 5px");
        NKSoftStudio.siblings("div").css("border-bottom", "none");

        NKSoftStudio.css("display", "block");
        NKSoftStudio.siblings("div").css("display", "none");
}
