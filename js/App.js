
const removeCartItemButtons = document.getElementsByClassName('btn-danger') 

console.log(removeCartItemButtons);

// Remove Item From Cart
for (let i = 0; i < removeCartItemButtons.length; i++) {
  const button = removeCartItemButtons[i];
  button.addEventListener('click', (e) => {
    const buttonClicked = e.target
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  });
}


// Update Cart Total
updateCartTotal = () => {
  const cartItemContainer = getElementsByClassName('cart-items')[0];
  const cartRows = cartItemContainer.getElementsByClassName('cart-row')
}
