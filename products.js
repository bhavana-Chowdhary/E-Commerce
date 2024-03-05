const productsAPI = [
  {
    id: 1,
    name: "Red T-shirt",
    price: 999,
    img: "/assests/images/product-1.jpg",
  },
  {
    id: 2,
    name: "HRX shoe",
    price: 1499,
    img: "/assests/images/product-2.jpg",
  },
  {
    id: 3,
    name: "Track Pant",
    price: 1499,
    img: "/assests/images/product-3.jpg",
  },
  {
    id: 4,
    name: "Black T-shirt",
    price: 1999,
    img: "/assests/images/product-4.jpg",
  },
  { id: 5, name: "Shoe", price: 3499, img: "/assests/images/product-5.jpg" },
  {
    id: 6,
    name: "Puma Black t-Shirt",
    price: 599,
    img: "/assests/images/product-6.jpg",
  },
  { id: 7, name: "Sacks", price: 699, img: "/assests/images/product-7.jpg" },
  { id: 8, name: "Watch", price: 199, img: "/assests/images/product-8.jpg" },
  { id: 9, name: "Watch", price: 299, img: "/assests/images/product-9.jpg" },
  {
    id: 10,
    name: "Running Shoe",
    price: 499,
    img: "/assests/images/product-10.jpg",
  },
  { id: 11, name: "Lofers", price: 999, img: "/assests/images/product-11.jpg" },
  {
    id: 12,
    name: "Track Pant Black",
    price: 399,
    img: "/assests/images/product-12.jpg",
  },
  {
    id: 13,
    name: "Smart Watch",
    price: 199,
    img: "/assests/images/newproduct.jpg",
  },
  {
    id: 14,
    name: "Safari Bag",
    price: 299,
    img: "/assests/images/newproduct-1.jpg",
  },
  { id: 15, name: "Shoe", price: 399, img: "/assests/images/newproduct-2.jpg" },
  {
    id: 16,
    name: "Goggles",
    price: 599,
    img: "/assests/images/newproduct-3.jpg",
  },
  {
    id: 17,
    name: "Dress",
    price: 599,
    img: "/assests/images/newproduct-4.jpg",
  },
  {
    id: 18,
    name: "Dress",
    price: 599,
    img: "/assests/images/newproduct-5.jpg",
  },
  
];

function renderProduct(product) {
  // Add a data attribute to the button for identifying the product
  return `
    <div class="product-item" data-product-id="${product.id}">
         <img src="${product.img}" alt="${product.name}">
          <h5>${product.name}</h5>
          <h6>$${product.price}</h6>
          <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
    </div>
  `;
}

function renderProducts(products) {
  const productList = document.getElementById('productList');
  productList.innerHTML = products.map(renderProduct).join('');

  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
      const productId = this.getAttribute('data-product-id');
      addProductToCart(productId);
      alert("Product Added")
    });
  });
}

function addProductToCart(productId) {
  const product = productsAPI.find(p => p.id == productId);
  if (!product) return;
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cart.find(p => p.id == productId);
  if (existingProduct) {
    existingProduct.quantity = (existingProduct.quantity || 1) + 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

renderProducts(productsAPI);

// here start diplay to cart



