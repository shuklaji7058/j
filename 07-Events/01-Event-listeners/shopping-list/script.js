const clearBtn = document.querySelector("#clear");

function onClear() {
  const itemList = document.querySelector("ul");
  const items = itemList.querySelectorAll("li");

  // itemList.innerHTML='';

  items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

//JavaScript Event Listener
clearBtn.onClick = function () {
  alert("clear Items");
};

clearBtn.onClick = function () {
  console.log("clear Items");
};

//addEventListener()
clearBtn.addEventListener("click", () => alert("Clear Items"));

//Use named function
clearBtn.addEventListener("click", onClear);

// removeEventListener()
setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);

//Fire off event from JS
setTimeout(() => clearBtn.click(), 5000);
