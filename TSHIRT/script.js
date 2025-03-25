// Cart functionality

// Cart array to store items
let cart = [];

// Function to add items to the cart
function addToCart(name, price) {
    // Create a cart item object
    const item = {
        name: name,
        price: price
    };

    // Add the item to the cart
    cart.push(item);
    alert(`${name} has been added to your cart.`);
}

// Function to open the cart modal
function openCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear previous cart content
    cartItems.innerHTML = '';
    
    // Calculate total
    let total = 0;
    
    // Display cart items
    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `${item.name} - $${item.price}`;
        cartItems.appendChild(div);
        total += item.price;
    });

    // Update total in the modal
    cartTotal.innerText = `Total: $${total.toFixed(2)}`;

    // Show the cart modal
    cartModal.style.display = 'block';
}

// Function to close the cart modal
function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}
