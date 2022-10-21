(function(){document.cookie = "performance-cookie-1= value";
let child = document.createElement("li");
child.textContent = "External script 1 got executed which sets Performance cookies.";
if (document.getElementById("script-info")) {
    document.getElementById("script-info").appendChild(child);
} else {
    window.addEventListener('DOMContentLoaded', () => {
        document.getElementById("script-info").appendChild(child);
    });
}})();