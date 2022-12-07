const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    username.parentElement.classList.remove("notValid", "valid");
    password.parentElement.classList.remove("notValid", "valid");
    if (username.value === ""){

    }





})
function load() {
    var feed = "http://feeds.bbci.co.uk/news/world/rss.xml";
    new GFdynamicNews(feed, "feedControl");
}
google.load("feeds", "1");
google.setOnLoadCallback(load);