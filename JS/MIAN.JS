// Recall elements from HTML page.
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// The function responsible for adding the tasks.
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  seveData();
}

// The function responsible for deleting the task and placing the callback.
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      seveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      seveData();
    }
  },
  false
);

// This function allows you to save data inside an HTML element (listContainer).
function seveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// This function is responsible for retrieving the data stored in the HTML element.
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
