const menuCategories = document.querySelector('#menu-categories');
const categories = document.querySelector('#categories');
const wishlistOpen = document.querySelector('#wishlist-open');
const wishlist = document.querySelector('#wishlist');
const cartOpen = document.querySelector('#cart-open');
const cart = document.querySelector('#cart');
const thumbnailProduct = document.querySelectorAll('.thumbnail-product');
const images = document.querySelectorAll('[data-show]');
const navbarOpen = document.querySelector('#navbarToggler');
const navbarCollapse = document.querySelector('#navbarCollapse');

navbarOpen && navbarOpen.addEventListener('click', () => {
  navbarCollapse.classList.toggle('hidden');
});

menuCategories && menuCategories.addEventListener('click', () => {
  categories.classList.toggle('hidden');
  cart.classList.add('hidden');
  wishlist.classList.add('hidden');
});

wishlistOpen && wishlistOpen.addEventListener('click', () => {
  cart.classList.add('hidden');
  wishlist.classList.toggle('hidden');
});

cartOpen && cartOpen.addEventListener('click', () => {
  wishlist.classList.add('hidden');
  cart.classList.toggle('hidden');
});

thumbnailProduct && thumbnailProduct.forEach(button => {
  button && button.addEventListener('click', function() {
    thumbnailProduct.forEach(btn => {
      btn.classList.remove('border-primary');
      btn.classList.add('border-transparent');
    });
    this.classList.add('border-primary');
    this.classList.remove('border-transparent');
  });
});

thumbnailProduct && thumbnailProduct.forEach(button => {
  button.addEventListener('click', function() {
    const dataIndex = this.getAttribute('data-index');

    images && images.forEach(image => {
      image.classList.add('hidden');
    });

    const targetImage = document.querySelector(`[data-show="${dataIndex}"]`);
    targetImage.classList.remove('hidden');
  });
});
