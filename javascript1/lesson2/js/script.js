//DOM Selectors
//-------------
console.dir(document.querySelector("h1"));

const heading2 = document.querySelector("h2");
console.dir(heading2);

const headingByClass = document.querySelector(".heading2");
console.dir(headingByClass);

const list = document.querySelector("#list");
console.dir(list);

const list2 = document.getElementById("list");
console.dir(list2);

const listItem = document.querySelector("li");
console.dir(listItem);

const listItems = document.querySelectorAll("li");
console.dir(listItems);

for (let i = 0; i<listItems.length; i++){
    console.dir(listItems[i]);
}

for (let i = 0; i<listItems.length; i++){
    console.dir(listItems[i].innerText);
}

//Manipulating the elements - style
//---------------------------------
const heading1 = document.querySelector("h1");
heading1.style.color = "purple";

heading1.style.border = "1px green solid";

heading1.style.backgroundColor = "lightGray";
heading1.style.padding = "1em";

//className and classList
//-----------------------
const div = document.querySelector("div");
console.log(div.className);

div.classList.add("container");
console.log(div.className);

div.classList.add("second-class");
console.log(div.className);

//InnerText
//---------
const pageHeading = document.querySelector("h1");
pageHeading.innerText = "Updated using innerText";

const allTheListItems = document.querySelectorAll("li");
for (let i = 0; i<allTheListItems.length; i++){
    allTheListItems[i].innerText = i + " changed";
}

//InnerHTML
//--------
pageHeading.innerHTML = "Updated using innerHTML";

const container = document.querySelector("div");
container.innerHTML = `<p>
                                    <b>Bold Text:</b> unbolded text
                                </p>`;

/* const list = document.querySelector("ul"); */
const existingHTML = list.innerHTML;
const newHTML = "<li>New item at the end</li>";
list.innerHTML = existingHTML + newHTML;

/* const list = document.querySelector("ul"); */
list.innerHTML = list.innerHTML + "<li>New item at the end pt2</li>";

/* const list = document.querySelector("ul"); */
list.innerHTML = "<li>New item at the beginning</li>" + list.innerHTML;

