const btn = document.getElementById("executeStorage");
const local = document.getElementById("local");
const session = document.getElementById("session");

local.innerText = localStorage.getItem("name") || "No data found";
session.innerText = sessionStorage.getItem("name") || "No data found";

btn.addEventListener("click", () => {
  // sessionStorage
  sessionStorage.setItem("name", "John Doe");

  // localStorage
  localStorage.setItem("name", "John Doe");

  alert("Data stored in sessionStorage and localStorage");
})