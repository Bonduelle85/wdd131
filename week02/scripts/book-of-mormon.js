const button = document.querySelector("button");
const input = document.querySelector("#favchap");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    const deleteButton = document.createElement("button");
    const li = document.createElement("li");

    li.textContent = input.value;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.appendChild(li);

    input.value = "";
    input.focus();

    deleteButton.addEventListener("click", function () {
      list.removeChild(li);
      input.focus();
    });
  } else {
    input.focus();
  }
});
