const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.productPrice);
  updateTotalPrice(-price);
  item.remove();
}

// Function to add a new product to the cart
function addProduct() {
  const productName = productNameInput.value;
  const productPrice = parseFloat(productPriceInput.value);

  if (productName === "" || isNaN(productPrice) || productPrice <= 0) {
    alert('Please enter a valid prouduct name and price');
  }
}
//create a event listener for addproduct
addProductButton.addEventListener("click", ()=> {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  if (!name || isNaN(price) || price <= 0) {
    showValidationmessage(
      "Please enter a valid product name and a price > 0."
    );
    productNameInput.focus();
    return;
  }
  // Create a new list item for the product
  const listItem = document.createElement('li');
  listItem.textContext = `${productName} - $${productPrice.toFixed(2)}`;
  listItem.dataset.productPrice = productPrice;

  // Add remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-btn');
  removeButton.addEventListener('click', removeItem);
  listItem.appendChild(removeButton);

  // Add the item to the cart
  cart.appendChild(listItem);

  //Update the total price
  updateTotalPrice(productPrice);

  //Clear input fields
  productNameInput.value = '';
  productPriceInput.value = '';
}

// Add event listener for add product button
addProductButton.addEventListener('click', addProduct);