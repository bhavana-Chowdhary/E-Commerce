  function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
  function renderCartItems() {
    const cartItems = getCartItems();
    const cartContainer = document.getElementById('cartItemsContainer');
    const totalPriceContainer = document.getElementById('totalPriceContainer');

    cartContainer.innerHTML = '';
    
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceContainer.innerHTML = 'Total Price: $0';
        return;
    }
    
    let totalPrice = 0;
  
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
          <button class="decrease-quantity" data-product-id="${item.id}">-<button>                    
          <span>Quantity: ${item.quantity}<span>                    
          <button class="increase-quantity" data-product-id="${item.id}">+</button>
          
          <button class="remove-from-cart-btn" data-product-id="${item.id}" id="delete">Remove</button>
        </div>
      `;
      cartContainer.appendChild(itemElement);

       totalPrice += item.price * item.quantity;
    });
      totalPriceContainer.innerHTML = `Total Price: $${totalPrice.toFixed(2)}`;
    
     addQuantityEventListeners();
  }
  
function addQuantityEventListeners() {
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            updateItemQuantity(productId, 1);
        });
    });
    
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            updateItemQuantity(productId, -1);
        });
    });
}

function updateItemQuantity(productId, change) {
    let cartItems = getCartItems();
    const itemIndex = cartItems.findIndex(item => item.id == productId);
    if (itemIndex > -1) {
        cartItems[itemIndex].quantity += change;
        // Remove the item if the quantity becomes 0 or less
        if (cartItems[itemIndex].quantity <= 0) {
            cartItems.splice(itemIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));
        renderCartItems(); // Refresh cart display
    }
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

  const getData = (isDisplay) => {
    if (isDisplay == true) {
      document.getElementById("notp").classList.add("headClass");
      document.getElementsByClassName("on")[0].classList.add("don")
      document.getElementsByClassName("on")[1].classList.remove("don")
    }
    else {
      document.getElementById("notp").classList.remove("headClass");
      document.getElementsByClassName("on")[0].classList.remove("don")
      document.getElementsByClassName("on")[1].classList.add("don")
    }
  }