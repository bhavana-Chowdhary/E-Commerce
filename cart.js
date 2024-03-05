function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
  function renderCartItems() {
    const cartItems = getCartItems();
    const cartContainer = document.getElementById('cartItemsContainer');
  
    cartContainer.innerHTML = '';
  
    if (cartItems.length === 0) {
      cartContainer.innerHTML = '<p>Your cart is empty.</p>';
      return;
    }
  
    cartItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
        <div class="cart-item-details">
           <h4 class="cart-item-name">${item.name}</h4>
          <p class="cart-item-price">$${item.price}</p>
          <img src="${item.img}" alt="${item.name}" class="cart-item-image">
          <h4 class="cart-item-name">Total Price:</h4>
          <p class="cart-item-price">$${item.price}</p>
          <button>-</button>
          <p class="cart-item-quantity">Quantity: ${item.quantity}</p>
          <button>+</button>
          
          <button class="remove-from-cart-btn" data-product-id="${item.id}" id="delete">Remove</button>
        </div>
      `;
      cartContainer.appendChild(itemElement);
    });
  }
  document.addEventListener('DOMContentLoaded', renderCartItems);
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-from-cart-btn')) {
      const productId = event.target.getAttribute('data-product-id');
      removeItemFromCart(productId);
    }
  });
  
  function removeItemFromCart(productId) {
    let cartItems = getCartItems();
    cartItems = cartItems.filter(item => item.id != productId);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCartItems();
  }