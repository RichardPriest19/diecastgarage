// ===== SAMPLE PRODUCT DATA =====
// Replace this with your actual product data or connect to a backend
const sampleProducts = [
    {
        id: 1,
        name: '1968 Custom Camaro',
        year: 2023,
        series: 'Hot Wheels Legends',
        condition: 'mint',
        price: 39.99,
        quantity: 3,
        description: 'A classic reimagining of the iconic 1968 Camaro. Mint in Box with certificate of authenticity.',
        images: [
            'https://via.placeholder.com/500x500?text=Camaro+Front',
            'https://via.placeholder.com/500x500?text=Camaro+Side',
            'https://via.placeholder.com/500x500?text=Camaro+Top',
            'https://via.placeholder.com/500x500?text=Camaro+Box'
        ]
    },
    {
        id: 2,
        name: '2022 Tesla Roadster',
        year: 2022,
        series: 'Modern Collectors',
        condition: 'excellent',
        price: 19.99,
        quantity: 5,
        description: 'Near-mint condition, minimal shelf wear. A must-have for Tesla enthusiasts.',
        images: [
            'https://via.placeholder.com/500x500?text=Tesla+Front',
            'https://via.placeholder.com/500x500?text=Tesla+Side',
            'https://via.placeholder.com/500x500?text=Tesla+Top',
            'https://via.placeholder.com/500x500?text=Tesla+Detail'
        ]
    },
    {
        id: 3,
        name: '1995 Ferrari F50',
        year: 1995,
        series: 'Vintage Rare',
        condition: 'mint',
        price: 99.99,
        quantity: 1,
        description: 'Extremely rare first-year production. One of the most sought-after vintage Hot Wheels.',
        images: [
            'https://via.placeholder.com/500x500?text=Ferrari+Front',
            'https://via.placeholder.com/500x500?text=Ferrari+Side',
            'https://via.placeholder.com/500x500?text=Ferrari+Top',
            'https://via.placeholder.com/500x500?text=Ferrari+Vintage'
        ]
    },
    {
        id: 4,
        name: 'Dodge Charger R/T',
        year: 2023,
        series: 'Muscle Cars',
        condition: 'excellent',
        price: 15.99,
        quantity: 8,
        description: 'Authentic representation of the legendary muscle car. Excellent condition.',
        images: [
            'https://via.placeholder.com/500x500?text=Dodge+Front',
            'https://via.placeholder.com/500x500?text=Dodge+Side',
            'https://via.placeholder.com/500x500?text=Dodge+Top',
            'https://via.placeholder.com/500x500?text=Dodge+Engine'
        ]
    },
    {
        id: 5,
        name: 'Porsche 911 GT',
        year: 2023,
        series: 'Track Masters',
        condition: 'mint',
        price: 27.99,
        quantity: 2,
        description: 'High-performance Porsche in pristine condition. Factory sealed packaging.',
        images: [
            'https://via.placeholder.com/500x500?text=Porsche+Front',
            'https://via.placeholder.com/500x500?text=Porsche+Side',
            'https://via.placeholder.com/500x500?text=Porsche+Top',
            'https://via.placeholder.com/500x500?text=Porsche+Sealed'
        ]
    },
    {
        id: 6,
        name: 'Lamborghini Huracán',
        year: 2022,
        series: 'Supercars',
        condition: 'excellent',
        price: 31.99,
        quantity: 4,
        description: 'Stunning yellow finish with carbon fibre details. Exceptional condition.',
        images: [
            'https://via.placeholder.com/500x500?text=Lambo+Front',
            'https://via.placeholder.com/500x500?text=Lambo+Side',
            'https://via.placeholder.com/500x500?text=Lambo+Top',
            'https://via.placeholder.com/500x500?text=Lambo+Yellow'
        ]
    },
    {
        id: 7,
        name: '1969 Pontiac GTO',
        year: 1969,
        series: 'Vintage Legends',
        condition: 'good',
        price: 36.99,
        quantity: 1,
        description: 'Extremely rare original production. Some surface wear consistent with age.',
        images: [
            'https://via.placeholder.com/500x500?text=Pontiac+Front',
            'https://via.placeholder.com/500x500?text=Pontiac+Side',
            'https://via.placeholder.com/500x500?text=Pontiac+Top',
            'https://via.placeholder.com/500x500?text=Pontiac+Original'
        ]
    },
    {
        id: 8,
        name: 'McLaren P1',
        year: 2023,
        series: 'Modern Legends',
        condition: 'mint',
        price: 43.99,
        quantity: 2,
        description: 'Hybrid hypercar in stunning midnight black. Sealed in original packaging.',
        images: [
            'https://via.placeholder.com/500x500?text=McLaren+Front',
            'https://via.placeholder.com/500x500?text=McLaren+Side',
            'https://via.placeholder.com/500x500?text=McLaren+Top',
            'https://via.placeholder.com/500x500?text=McLaren+Black'
        ]
    },
    {
        id: 9,
        name: 'Bugatti Veyron',
        year: 2023,
        series: 'Supercars',
        condition: 'mint',
        price: 47.99,
        quantity: 1,
        description: 'The ultimate speed machine. Mint condition with certificate.',
        images: [
            'https://via.placeholder.com/500x500?text=Bugatti+Front',
            'https://via.placeholder.com/500x500?text=Bugatti+Side',
            'https://via.placeholder.com/500x500?text=Bugatti+Top',
            'https://via.placeholder.com/500x500?text=Bugatti+Rare'
        ]
    },
    {
        id: 10,
        name: 'Ford Mustang Boss',
        year: 2023,
        series: 'American Legends',
        condition: 'excellent',
        price: 19.99,
        quantity: 6,
        description: 'Iconic American muscle. Like-new condition with minor shelf wear only.',
        images: [
            'https://via.placeholder.com/500x500?text=Mustang+Front',
            'https://via.placeholder.com/500x500?text=Mustang+Side',
            'https://via.placeholder.com/500x500?text=Mustang+Top',
            'https://via.placeholder.com/500x500?text=Mustang+Boss'
        ]
    },
    {
        id: 11,
        name: 'Nissan Skyline R34',
        year: 2022,
        series: 'JDM Classics',
        condition: 'mint',
        price: 35.99,
        quantity: 3,
        description: 'The legendary Godzilla. Factory sealed, never opened.',
        images: [
            'https://via.placeholder.com/500x500?text=Skyline+Front',
            'https://via.placeholder.com/500x500?text=Skyline+Side',
            'https://via.placeholder.com/500x500?text=Skyline+Top',
            'https://via.placeholder.com/500x500?text=Skyline+JDM'
        ]
    },
    {
        id: 12,
        name: 'BMW M3 Evolution',
        year: 2023,
        series: 'Performance',
        condition: 'excellent',
        price: 23.99,
        quantity: 7,
        description: 'German engineering at its finest. Excellent collector-grade condition.',
        images: [
            'https://via.placeholder.com/500x500?text=BMW+Front',
            'https://via.placeholder.com/500x500?text=BMW+Side',
            'https://via.placeholder.com/500x500?text=BMW+Top',
            'https://via.placeholder.com/500x500?text=BMW+M3'
        ]
    }
];

// ===== APPLICATION STATE =====
let cart = [];
let currentProduct = null;
let currentQuantity = 1;
let currentImageIndex = 0;

// ===== LOAD PRODUCTS FROM ADMIN APP =====
function loadProductsFromStorage() {
    const STORAGE_KEY = 'diecast_garage_products';
    const stored = localStorage.getItem(STORAGE_KEY);
    
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Error loading products from storage:', e);
            return sampleProducts;
        }
    }
    
    return sampleProducts;
}

let allProducts = loadProductsFromStorage();
let filteredProducts = [...allProducts];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadCartFromStorage();
    setupEventListeners();
    renderProducts(allProducts);
});

function initializeApp() {
    console.log('🏎️ Diecast Garage initialized');
    console.log('Total products in inventory:', allProducts.length);
    
    // Watch for storage changes (when admin app updates products)
    window.addEventListener('storage', function(e) {
        if (e.key === 'diecast_garage_products') {
            allProducts = loadProductsFromStorage();
            filteredProducts = [...allProducts];
            renderProducts(allProducts);
            console.log('Products updated from admin app');
        }
    });
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Cart button
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    document.getElementById('continueShopping').addEventListener('click', closeCart);

    // Modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('closeCheckout').addEventListener('click', closeCheckout);

    // Search and filter
    document.getElementById('searchInput').addEventListener('input', filterProducts);
    document.getElementById('filterCondition').addEventListener('change', filterProducts);
    document.getElementById('filterSort').addEventListener('change', filterProducts);

    // Product modal actions
    document.getElementById('increaseQty').addEventListener('click', () => changeQuantity(1));
    document.getElementById('decreaseQty').addEventListener('click', () => changeQuantity(-1));
    document.getElementById('addToCartBtn').addEventListener('click', addToCart);

    // Image gallery navigation
    document.getElementById('prevImageBtn').addEventListener('click', prevImage);
    document.getElementById('nextImageBtn').addEventListener('click', nextImage);

    // Cart actions
    document.getElementById('checkoutBtn').addEventListener('click', openCheckout);

    // Overlay
    document.getElementById('overlay').addEventListener('click', () => {
        closeModal();
        closeCart();
        closeCheckout();
    });

    // Return to top button
    const returnToTopBtn = document.getElementById('returnToTop');
    returnToTopBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', toggleReturnToTopButton);

    // Checkout form
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
}

// ===== PRODUCT RENDERING =====
function renderProducts(products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    if (products.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-secondary);">No products match your search.</p>';
        return;
    }

    products.forEach((product, index) => {
        const card = createProductCard(product);
        card.style.animationDelay = `${index * 0.05}s`;
        grid.appendChild(card);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.images[0]}" alt="${product.name}" class="product-img">
            <div class="image-counter">1/4</div>
        </div>
        <div class="product-details">
            <h3 class="product-title">${product.name}</h3>
            <span class="product-condition">${product.condition}</span>
            <div class="product-meta">
                <span>Year: ${product.year}</span>
                <span>${product.series}</span>
            </div>
            <div class="product-price">£${product.price.toFixed(2)}</div>
            <div class="product-stock">${product.quantity} in stock</div>
            <button class="product-action">View Details</button>
        </div>
    `;

    card.addEventListener('click', () => openProductModal(product));
    return card;
}

// ===== MODAL MANAGEMENT =====
function openProductModal(product) {
    currentProduct = product;
    currentQuantity = 1;
    currentImageIndex = 0;

    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalCondition').textContent = product.condition.toUpperCase();
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalYear').textContent = product.year;
    document.getElementById('modalSeries').textContent = product.series;
    document.getElementById('modalQty').textContent = product.quantity;
    document.getElementById('modalPrice').textContent = `£${product.price.toFixed(2)}`;
    document.getElementById('quantityInput').value = 1;
    document.getElementById('quantityInput').max = product.quantity;

    // Update modal image gallery
    updateModalGallery();
    showModal('productModal');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function showModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

// ===== IMAGE GALLERY MANAGEMENT =====
function updateModalGallery() {
    if (!currentProduct || !currentProduct.images) return;

    // Update main image
    document.getElementById('modalMainImage').src = currentProduct.images[currentImageIndex];
    
    // Update counter
    document.getElementById('imageCounter').textContent = `${currentImageIndex + 1}/${currentProduct.images.length}`;
    
    // Create thumbnails
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = currentProduct.images.map((img, index) => `
        <div class="thumbnail ${index === currentImageIndex ? 'active' : ''}" onclick="selectThumbnail(${index})">
            <img src="${img}" alt="Thumbnail ${index + 1}">
        </div>
    `).join('');
}

function nextImage() {
    if (!currentProduct) return;
    currentImageIndex = (currentImageIndex + 1) % currentProduct.images.length;
    updateModalGallery();
}

function prevImage() {
    if (!currentProduct) return;
    currentImageIndex = (currentImageIndex - 1 + currentProduct.images.length) % currentProduct.images.length;
    updateModalGallery();
}

function selectThumbnail(index) {
    if (!currentProduct || index < 0 || index >= currentProduct.images.length) return;
    currentImageIndex = index;
    updateModalGallery();
}

// ===== QUANTITY MANAGEMENT =====
function changeQuantity(change) {
    const input = document.getElementById('quantityInput');
    let newQuantity = parseInt(input.value) + change;
    newQuantity = Math.max(1, Math.min(newQuantity, currentProduct.quantity));
    input.value = newQuantity;
    currentQuantity = newQuantity;
}

// ===== CART MANAGEMENT =====
function addToCart() {
    if (!currentProduct) return;

    const existingItem = cart.find(item => item.id === currentProduct.id);

    if (existingItem) {
        existingItem.cartQuantity += currentQuantity;
    } else {
        cart.push({
            ...currentProduct,
            cartQuantity: currentQuantity
        });
    }

    saveCartToStorage();
    updateCartDisplay();
    closeModal();

    // Show feedback
    showCartNotification();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.cartQuantity, 0);
    cartCount.textContent = totalItems;

    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        emptyCart.style.display = 'block';
    } else {
        emptyCart.style.display = 'none';
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-qty">Qty: ${item.cartQuantity}</div>
                    <div class="cart-item-price">£${(item.price * item.cartQuantity).toFixed(2)}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');
    }

    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.cartQuantity), 0);
    const shipping = subtotal > 0 ? 5.99 : 0;
    const total = subtotal + shipping;

    document.getElementById('subtotal').textContent = `£${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `£${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `£${total.toFixed(2)}`;
}

function showCartNotification() {
    // Optional: Add a toast notification
    console.log('✅ Item added to cart!');
}

// ===== CART PERSISTENCE =====
function saveCartToStorage() {
    localStorage.setItem('hwvault_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const stored = localStorage.getItem('hwvault_cart');
    if (stored) {
        cart = JSON.parse(stored);
        updateCartDisplay();
    }
}

// ===== CART SIDEBAR =====
function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// ===== SEARCH & FILTER =====
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const condition = document.getElementById('filterCondition').value;
    const sort = document.getElementById('filterSort').value;

    // Filter
    filteredProducts = allProducts.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(searchTerm);
        const conditionMatch = !condition || product.condition === condition;
        return nameMatch && conditionMatch;
    });

    // Sort
    switch(sort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.year - a.year);
            break;
        case 'featured':
        default:
            filteredProducts.sort((a, b) => a.id - b.id);
    }

    renderProducts(filteredProducts);
}

// ===== CHECKOUT =====
function openCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    updateCheckoutSummary();
    showModal('checkoutModal');
    
    // Initialize PayPal buttons
    setTimeout(() => initializePayPal(), 100);
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function updateCheckoutSummary() {
    const summaryDiv = document.getElementById('checkoutSummary');
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.cartQuantity), 0);
    const shipping = 5.99;
    const total = subtotal + shipping;

    summaryDiv.innerHTML = `
        <div style="margin-bottom: 1rem;">
            ${cart.map(item => `
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; color: var(--text-secondary);">
                    <span>${item.name} x${item.cartQuantity}</span>
                    <span>£${(item.price * item.cartQuantity).toFixed(2)}</span>
                </div>
            `).join('')}
        </div>
        <div style="border-top: 1px solid var(--border-color); padding-top: 1rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>Subtotal:</span>
                <span>£${subtotal.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                <span>Shipping (UK):</span>
                <span>£${shipping.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-weight: 900; font-size: 1.2rem; color: var(--primary-gold);">
                <span>Total:</span>
                <span>£${total.toFixed(2)}</span>
            </div>
        </div>
    `;
}

function handleCheckout(e) {
    e.preventDefault();
    // PayPal will handle the checkout
    console.log('Checkout initiated - PayPal processing');
}

// ===== PAYPAL INTEGRATION =====
function initializePayPal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.cartQuantity), 0);
    const shipping = subtotal > 0 ? 5.99 : 0;
    const total = (subtotal + shipping).toFixed(2);

    paypal.Buttons({
        createOrder: (data, actions) => {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: total,
                        currency_code: "GBP",
                        breakdown: {
                            item_total: {
                                currency_code: "GBP",
                                value: subtotal.toFixed(2)
                            },
                            shipping: {
                                currency_code: "GBP",
                                value: shipping.toFixed(2)
                            }
                        }
                    },
                    items: cart.map(item => ({
                        name: item.name,
                        quantity: item.cartQuantity.toString(),
                        unit_amount: {
                            currency_code: "GBP",
                            value: item.price.toFixed(2)
                        }
                    }))
                }]
            });
        },
        onApprove: (data, actions) => {
            return actions.order.capture().then(details => {
                console.log('✅ Payment successful!', details);
                alert('Thank you! Your order has been confirmed.\nOrder ID: ' + details.id);
                
                // Clear cart
                cart = [];
                saveCartToStorage();
                updateCartDisplay();
                closeCheckout();
            });
        },
        onError: (err) => {
            console.error('❌ Payment error:', err);
            alert('An error occurred during payment. Please try again.');
        }
    }).render('#paypalButtonContainer');
}

// ===== SCROLL TO TOP FUNCTIONS =====
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleReturnToTopButton() {
    const returnToTopBtn = document.getElementById('returnToTop');
    if (window.pageYOffset > 300) {
        returnToTopBtn.classList.add('show');
    } else {
        returnToTopBtn.classList.remove('show');
    }
}

// ===== UTILITY FUNCTIONS =====
function formatPrice(price) {
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    }).format(price);
}

// ===== EXPORT FUNCTIONS FOR FUTURE USE =====
window.removeFromCart = removeFromCart;
window.selectThumbnail = selectThumbnail;
window.nextImage = nextImage;
window.prevImage = prevImage;
