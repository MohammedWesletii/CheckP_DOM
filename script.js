const cartItems = [
    {
        id: 1,
        name: "Item 1",
        price: 10.99,
        quantity: 2,
        liked: false
    },
    {
        id: 2,
        name: "Item 2",
        price: 19.99,
        quantity: 1,
        liked: true
    },
    {
        id: 3,
        name: "Item 3",
        price: 5.99,
        quantity: 3,
        liked: false
    }
];

const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

function renderCart() {
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const itemImage = document.createElement('img');
        itemImage.src = 'araaftech kifech :)'; 
        itemImage.alt = item.name;

        const itemName = document.createElement('span');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.textContent = `$${(item.price * item.quantity).toFixed(2)}`;

        const quantityContainer = document.createElement('div');
        const decrementButton = document.createElement('button');
        decrementButton.textContent = '-';
        const quantity = document.createElement('span');
        quantity.textContent = item.quantity;
        const incrementButton = document.createElement('button');
        incrementButton.textContent = '+';

        const likeButton = document.createElement('button');
        likeButton.classList.add('like-button');
        likeButton.innerHTML = item.liked ? '&#9829;' : '&#9825;';

        decrementButton.addEventListener('click', () => {
            if (item.quantity > 1) {
                item.quantity--;
                quantity.textContent = item.quantity;
                itemPrice.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
                updateTotalPrice();
            }
        });

        incrementButton.addEventListener('click', () => {
            item.quantity++;
            quantity.textContent = item.quantity;
            itemPrice.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
            updateTotalPrice();
        });

        likeButton.addEventListener('click', () => {
            item.liked = !item.liked;
            likeButton.innerHTML = item.liked ? '&#9829;' : '&#9825;';
        });

        cartItem.appendChild(itemImage);
        cartItem.appendChild(itemName);
        cartItem.appendChild(decrementButton);
        quantityContainer.appendChild(quantity);
        cartItem.appendChild(quantityContainer);
        cartItem.appendChild(incrementButton);
        cartItem.appendChild(itemPrice);
        cartItem.appendChild(likeButton);

        cartItemsContainer.appendChild(cartItem);

        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

function updateTotalPrice() {
    let totalPrice = 0;

    cartItems.forEach(item => {
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

renderCart();
