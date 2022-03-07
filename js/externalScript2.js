(function(){document.cookie = "functional-cookie= value";
let child = document.createElement("li");
child.textContent = "External script 2 got executed which sets Functional cookies.";

if (document.getElementById("script-info")) {
  document.getElementById("script-info").appendChild(child);
} else {
  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("script-info").appendChild(child);
  });
}})();
