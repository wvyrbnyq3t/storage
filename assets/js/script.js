const btn = document.getElementById("executeStorage");

btn.addEventListener("click", () => {
  // sessionStorage
  sessionStorage.setItem("name", "John Doe");

  // localStorage
  localStorage.setItem("name", "John Doe");

  alert("Data stored in sessionStorage and localStorage");
})