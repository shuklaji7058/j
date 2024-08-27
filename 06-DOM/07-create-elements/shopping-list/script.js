const div = document.createElement("div");
div.className = "My-element";
div.id = "my-element";
div.setAttribute("title", "My Element");

//div.innerText = 'Hello World';

const text = document.createTextNode("Hello Worlds");
div.appendChild(text);

// document.body.appendChild(div);

document.querySelector("ul").appendChild(div);
