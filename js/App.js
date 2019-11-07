
if(document.readyState == 'loading') {
  document.addEventListener('DOMContentLoader', ready)
} else {
  ready()
}

function ready() {
  const removeCartItemButtons = document.getElementsByClassName('btn-danger');
  console.log(removeCartItemButtons);

  for (let i = 0; i < removeCartItemButtons.length; i++) {
    const button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem);
  }
}


// Remove and Update Cart Item
function removeCartItem (e) {
  const buttonClicked = e.target
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}


// Update Cart Total
updateCartTotal = () => {
  const cartItemContainer = document.getElementsByClassName('cart-items')[0];
  const cartRows = cartItemContainer.getElementsByClassName('cart-row');

  let total = 0;

  for (let i = 0; i < cartRows.length; i++) {
    const cartRow = cartRows[i];
    const priceElement = cartRow.getElementsByClassName('cart-price')[0];
    const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];

    const price = parseFloat(priceElement.innerText.replace('$', ''));
    const quantity = quantityElement.value;

    total += (price * quantity);
  }
  document.getElementsByClassName('cart-total-price')[0].innerText = ('$' + total);
  console.log(total);
  
}
