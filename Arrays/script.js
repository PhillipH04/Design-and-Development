const input = document.getElementById("item-input");
const addButton = document.getElementById("addsoutton");
const list = document.getElementById("shopping-list");
const errorMsg = document.getElementById("error-msg");

addButton.addEventListener("click", () => {
const itemText = input.value.trim();
if (itemText === "") {
errorMsg. classList, remove("hidden");
}
if (itemText === "") return;
const li = document.createElement ("li");
li.className =
"flex items-center justify-between bg-gray=100 px=3 py-2 rounded cursor-pointer hover:bg-gray-200 transition";
li. innerHTML =
  <span class="item-text flex-grow">$(itemText)</span>
  <button class="remove-btn text=red-500 hoverttext-red-700 ml-4">:</button></button>
  ;
  list.appendChild(li);
  input.value = "";
});\
// Add item on pressing Enter
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addButton.click();
  }
});
list.addEventListener("click", (e) => {
 const li = e.target.closest("li");
 if (!li) return;
 if (e.target.classList.contains("remove-btn")) {
   li. remove();
 } else if (e.target.classList.contains("item-text")) {
   li.classList.toggle("line-through");
   li.classList.toggle("text-red-400");
   li.classList.toggle("bg-green-100");