var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");
var deleteBtns = document.querySelectorAll(".deleteBtn");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(document.createTextNode("X"));
	li.addEventListener("click", updateItem);
	btn.addEventListener("click", deleteItem);
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function updateItem(event) {
	event.srcElement.classList.toggle("done");
}

function deleteItem(event) {
	event.srcElement.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

list.forEach(item => {
	item.addEventListener("click", updateItem);
})

deleteBtns.forEach(btn => {
	btn.addEventListener("click", deleteItem);
})