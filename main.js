console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const Node1 = document.getElementById("node1");
Node1.textContent = "I used the getElementById('node1') method to access this";
console.log(Node1);

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const elementThatIWant = document.getElementsByClassName("node2")[0];

// console.log(node2Tags[0]);
// const node2Element = node2Tags[0];
elementThatIWant.textContent = `I used the getElementByClassName("node2") method to access this`;
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3 = document.getElementsByTagName("h3");
for (let i = 0; i < h3.length; i++) {
  h3[
    i
  ].textContent = `I used the getElementByTagName() method to access all of these`;
}
// for (const item of h3) {
//   item.textContent = `I used the getElementByTagName() method to access all of these`;
// }

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const elementP = document.createElement("p");
elementP.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method

const parentElement = document.querySelector(".exercise2");
parentElement.appendChild(elementP);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const aElement = document.createElement("a");
aElement.textContent = "I am an <a> tag";
parentElement.insertBefore(aElement, elementP);
// BONUS: Add a link href to the <a>
// aElement.href = "https://.ultimateguitar.com";
aElement.href = "https://lichess.org";
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const oldNode = document.querySelector("#N1");
const newNode = document.createElement("p");
const oldNodeParent = oldNode.parentElement;
newNode.textContent = "New Child Node";
oldNodeParent.replaceChild(newNode, oldNode);
//Down below is an example of a callback function
const myTimer = setTimeout(() => {
  newNode.remove();
  //clearTimeout is not as common
  clearTimeout(myTimer);
}, 1500);
// TODO: Remove the "New Child Node"

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element
const fruitList = document.createElement(`ul`);

// TODO: Iterate over the array values, and create a list item element for each
let array = list[(0, 1, 2, 3, 4, 5, 6, 7, 8)];

let i = 0;
while (i < list.length) {
  const newLi = document.createElement("li");
  newLi.textContent = `${list[i]}`;
  console.log(list[i]);
  fruitList.appendChild(newLi);
  i++;
}
//forEach loop
// list.forEach(()=> {
//   const newLi = document.createElement("li");
//   newLi.textContent = `${item}`;
//   console.log(list[i]);
//   fruitList.appendChild(newLi);
// });

// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4

document.querySelector("#container").appendChild(fruitList);
/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show() {
  //"outter layer"
  const modalDiv = document.createElement("div");
  //"inner layer"

  const modalCard = document.createElement("div");
  const closeModalButton = document.createElement("button");
  const modalText = document.createElement("p");
  modalDiv.id = "modal";
  modalCard.classList.add("modal-card");
  closeModalButton.textContent = "X";
  modalDiv.textContent =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  closeModalButton.addEventListener("click", () => {
    modalDiv.remove();
  });
  modalCard.append(closeModalButton);
  modalCard.append(modalText);
  modalDiv.append(modalCard);

  const mainTag = document.querySelector("main");
  mainTag.appendChild(modalDiv);
}

const showModalButton = document.querySelector("#btn");
showModalButton.addEventListener("click", show);
