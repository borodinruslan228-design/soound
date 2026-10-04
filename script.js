const products = [
  {
    id: 1,
    name: 'Whey Isolate Pro',
    category: 'Протеин',
    price: 2490,
    rating: 4.9,
    popularity: 98,
    badge: 'Лидер продаж',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
    description: 'Чистый сывороточный изолят с быстрым усвоением и высоким содержанием белка для восстановления после тренировок.',
    ingredients: ['Сывороточный изолят', 'Молочный белок', 'Лактоза', 'Какао'],
    flavors: ['Шоколад', 'Ваниль', 'Клубника'],
    weights: ['900 г', '2000 г'],
  },
  {
    id: 2,
    name: 'Creatine Monohydrate',
    category: 'Креатин',
    price: 1690,
    rating: 4.8,
    popularity: 91,
    badge: 'Топ-рейтинг',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    description: 'Классический креатин моногидрат для повышения силы, мощности и выносливости в силовых тренировках.',
    ingredients: ['Креатин моногидрат'],
    flavors: ['Без вкуса'],
    weights: ['300 г', '600 г'],
  },
  {
    id: 3,
    name: 'Mass Gainer X',
    category: 'Гейнеры',
    price: 2890,
    rating: 4.7,
    popularity: 90,
    badge: 'Для массы',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
    description: 'Энергетический гейнер с высоким содержанием калорий и углеводов для набора массы и восстановления.',
    ingredients: ['Крахмал', 'Молочный белок', 'Овсяные хлопья', 'Какао'],
    flavors: ['Шоколад', 'Ваниль', 'Банан'],
    weights: ['1500 г', '2500 г'],
  },
  {
    id: 4,
    name: 'BCAA Complex',
    category: 'Аминокислоты',
    price: 1990,
    rating: 4.6,
    popularity: 88,
    badge: 'Восстановление',
    image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=900&q=80',
    description: 'Сбалансированная формула BCAA для поддержки выносливости, восстановления и снижения усталости.',
    ingredients: ['L-лейцин', 'L-изолейцин', 'L-валин', 'Лимонная кислота'],
    flavors: ['Лимон', 'Арбуз', 'Клюква'],
    weights: ['240 капсул', '360 капсул'],
  },
  {
    id: 5,
    name: 'Pre-Workout Ignite',
    category: 'Предтренировочные комплексы',
    price: 2190,
    rating: 4.9,
    popularity: 97,
    badge: 'Энергия',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80',
    description: 'Энергетический предтренировочный комплекс для мощного фокуса, выносливости и мотивации перед нагрузкой.',
    ingredients: ['Кофеин', 'Бета-аланин', 'L-цитруллин', 'Тирамин'],
    flavors: ['Лайм', 'Кола', 'Тропик'],
    weights: ['180 г', '300 г'],
  },
  {
    id: 6,
    name: 'Daily Vitamins+',
    category: 'Витамины',
    price: 1490,
    rating: 4.5,
    popularity: 76,
    badge: 'Здоровье',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    description: 'Комплекс витаминов и минералов для поддержки иммунитета, энергии и общего тонуса организма.',
    ingredients: ['Витамин C', 'Витамин D3', 'Цинк', 'B-комплекс'],
    flavors: ['Капсулы'],
    weights: ['90 таблеток'],
  },
  {
    id: 7,
    name: 'Protein Crunch Bar',
    category: 'Батончики и снеки',
    price: 690,
    rating: 4.7,
    popularity: 82,
    badge: 'Снеки',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80',
    description: 'Белковый батончик с низким содержанием сахара и насыщенным вкусом для полезных перекусов.',
    ingredients: ['Белок', 'Орехи', 'Какао', 'Кокос'],
    flavors: ['Шоколад', 'Орех', 'Кокос'],
    weights: ['12 шт'],
  },
  {
    id: 8,
    name: 'Elite Shaker Bottle',
    category: 'Аксессуары',
    price: 990,
    rating: 4.8,
    popularity: 72,
    badge: 'Новый',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80',
    description: 'Прочный шейкер с герметичной крышкой и удобной ручкой для комфортного смешивания.',
    ingredients: ['Пластик Tritan', 'Металлическая крышка'],
    flavors: ['Черный', 'Синий', 'Красный'],
    weights: ['750 мл'],
  },
  {
    id: 9,
    name: 'Hydration Electrolytes',
    category: 'Витамины',
    price: 1290,
    rating: 4.6,
    popularity: 80,
    badge: 'Гидратация',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    description: 'Смесь электролитов для восполнения жидкости и минералов во время интенсивных нагрузок.',
    ingredients: ['Калий', 'Натрий', 'Магний', 'Кальций'],
    flavors: ['Лимон', 'Апельсин', 'Ягода'],
    weights: ['500 г'],
  },
  {
    id: 10,
    name: 'Recovery Blend',
    category: 'Аминокислоты',
    price: 1790,
    rating: 4.9,
    popularity: 94,
    badge: 'Восстановление',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=900&q=80',
    description: 'Комплекс аминокислот для быстрого восстановления после силовых и кардионагрузок.',
    ingredients: ['L-глютамин', 'BCAA', 'L-аргинин'],
    flavors: ['Лесная ягода', 'Лайм'],
    weights: ['240 г'],
  },
  {
    id: 11,
    name: 'Protein Cookies',
    category: 'Батончики и снеки',
    price: 760,
    rating: 4.5,
    popularity: 69,
    badge: 'Полезный перекус',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=80',
    description: 'Фитнес-печенье с белком для сытного перекуса без лишнего сахара.',
    ingredients: ['Белок', 'Овсянка', 'Орехи', 'Какао'],
    flavors: ['Шоколад', 'Орех'],
    weights: ['10 шт'],
  },
  {
    id: 12,
    name: 'Power Bag Pro',
    category: 'Аксессуары',
    price: 2490,
    rating: 4.7,
    popularity: 75,
    badge: 'Спортивный стиль',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80',
    description: 'Прочный рюкзак для тренировок с отделением под обувь и удобной внутренней системой хранения.',
    ingredients: ['Нейлон', 'Плотная ткань', 'Металлическая фурнитура'],
    flavors: ['Черный', 'Серый'],
    weights: ['32 л'],
  },
];

const productCategories = [
  { icon: '🥤', title: 'Протеин', text: 'Высокий белок для роста мышц.' },
  { icon: '⚡', title: 'Креатин', text: 'Сила и энергия в каждом повторе.' },
  { icon: '🏋️', title: 'Гейнеры', text: 'Калории для качественного набора массы.' },
  { icon: '💪', title: 'Аминокислоты', text: 'Восстановление и выносливость.' },
  { icon: '🔥', title: 'Предтренировочные', text: 'Энергия и фокус перед тренировкой.' },
  { icon: '🌿', title: 'Витамины', text: 'Поддержка здоровья и иммунитета.' },
  { icon: '🥨', title: 'Снеки', text: 'Полезные перекусы между сессиями.' },
  { icon: '🎒', title: 'Аксессуары', text: 'Для комфорта и удобства тренировок.' },
];

const state = {
  cart: JSON.parse(localStorage.getItem('fitpower-cart') || '[]'),
  category: 'all',
  search: '',
  sort: 'popular',
};

const $ = (selector) => document.querySelector(selector);

function formatPrice(value) {
  return `${Number(value).toLocaleString('ru-RU')} ₽`;
}

function getProduct(productId) {
  return products.find((product) => product.id === Number(productId));
}

function updateCartCount() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  $('#cartCount').textContent = totalQty;
}

function renderCategories() {
  $('#categoriesGrid').innerHTML = productCategories
    .map(
      (item) => `
        <article class="category-card">
          <div class="category-icon">${item.icon}</div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join('');
}

function getFilteredProducts() {
  const searchText = state.search.trim().toLowerCase();

  let filtered = products.filter((product) => {
    const byCategory = state.category === 'all' || product.category === state.category;
    const bySearch = !searchText || `${product.name} ${product.category}`.toLowerCase().includes(searchText);
    return byCategory && bySearch;
  });

  if (state.sort === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  }

  if (state.sort === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  if (state.sort === 'popular') {
    filtered = [...filtered].sort((a, b) => b.popularity - a.popularity);
  }

  return filtered;
}

function renderCatalog() {
  const catalog = $('#catalogGrid');
  const filtered = getFilteredProducts();

  $('#catalogStatus').textContent = state.category === 'all' ? 'Все товары' : state.category;

  if (!filtered.length) {
    catalog.innerHTML = '<div class="empty-state" style="grid-column:1/-1;">По вашему запросу ничего не найдено.</div>';
    return;
  }

  catalog.innerHTML = filtered
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image" style="background-image: url('${product.image}')">
            <span class="product-badge">${product.badge}</span>
          </div>
          <div class="product-body">
            <div class="product-meta">
              <span class="product-category">${product.category}</span>
              <span class="rating">★ ${product.rating}</span>
            </div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-bottom">
              <span class="product-price">${formatPrice(product.price)}</span>
              <span>${product.popularity}k</span>
            </div>
            <div class="product-actions">
              <button class="btn btn-primary" type="button" data-add-cart="${product.id}">В корзину</button>
              <button class="detail-btn" type="button" data-open-product="${product.id}" aria-label="Подробнее">i</button>
            </div>
          </div>
        </article>
      `,
    )
    .join('');
}

function renderPopular() {
  const popularProducts = [...products].sort((a, b) => b.popularity - a.popularity).slice(0, 4);
  $('#popularGrid').innerHTML = popularProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image" style="background-image: url('${product.image}')">
            <span class="product-badge">${product.badge}</span>
          </div>
          <div class="product-body">
            <div class="product-meta">
              <span class="product-category">${product.category}</span>
              <span class="rating">★ ${product.rating}</span>
            </div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-bottom">
              <span class="product-price">${formatPrice(product.price)}</span>
              <span>${product.popularity}k</span>
            </div>
            <div class="product-actions">
              <button class="btn btn-primary" type="button" data-add-cart="${product.id}">В корзину</button>
              <button class="detail-btn" type="button" data-open-product="${product.id}" aria-label="Подробнее">i</button>
            </div>
          </div>
        </article>
      `,
    )
    .join('');
}

function saveCart() {
  localStorage.setItem('fitpower-cart', JSON.stringify(state.cart));
}

function renderCart() {
  const container = $('#cartItems');
  const totalContainer = $('#cartTotal');

  if (!state.cart.length) {
    container.innerHTML = '<div class="empty-state">Корзина пуста. Добавьте товары для тренировок.</div>';
    totalContainer.textContent = '0 ₽';
    updateCartCount();
    return;
  }

  let total = 0;

  container.innerHTML = state.cart
    .map((item) => {
      const product = getProduct(item.productId);
      if (!product) return '';
      total += product.price * item.quantity;

      return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" />
          <div>
            <h4>${product.name}</h4>
            <p>${item.flavor || product.flavors[0]} • ${item.weight || product.weights[0]}</p>
            <div class="price-tag">${formatPrice(product.price)}</div>
          </div>
          <div class="cart-controls">
            <div class="qty-mini">
              <button type="button" data-cart-decrease="${item.productId}">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-cart-increase="${item.productId}">+</button>
            </div>
            <button class="delete-btn" type="button" data-cart-remove="${item.productId}">Удалить</button>
          </div>
        </div>
      `;
    })
    .join('');

  totalContainer.textContent = formatPrice(total);
  updateCartCount();
}

function addToCart(productId, quantity = 1, flavor = null, weight = null) {
  const product = getProduct(productId);
  if (!product) return;

  const chosenFlavor = flavor || product.flavors[0];
  const chosenWeight = weight || product.weights[0];

  const existing = state.cart.find(
    (item) => item.productId === Number(productId) && item.flavor === chosenFlavor && item.weight === chosenWeight,
  );

  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      productId: Number(productId),
      quantity,
      flavor: chosenFlavor,
      weight: chosenWeight,
    });
  }

  saveCart();
  renderCart();
}

function changeCartQuantity(productId, delta) {
  const item = state.cart.find((entry) => entry.productId === Number(productId));
  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.productId !== Number(productId));
  }

  saveCart();
  renderCart();
}

function removeCartItem(productId) {
  state.cart = state.cart.filter((entry) => entry.productId !== Number(productId));
  saveCart();
  renderCart();
}

function openCart() {
  $('#cartDrawer').classList.add('is-open');
  $('#cartOverlay').classList.add('is-open');
}

function closeCart() {
  $('#cartDrawer').classList.remove('is-open');
  $('#cartOverlay').classList.remove('is-open');
}

function openProductModal(productId) {
  const product = getProduct(productId);
  if (!product) return;

  const similar = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  $('#productModal').innerHTML = `
    <div class="modal-card">
      <div class="modal-inner">
        <div class="modal-top">
          <button class="modal-close" type="button" data-close-modal>×</button>
        </div>

        <div class="modal-grid">
          <div class="modal-image" style="background-image: url('${product.image}')"></div>

          <div class="modal-product">
            <span class="product-category">${product.category}</span>
            <h2>${product.name}</h2>
            <div class="price-row">
              <span class="modal-price">${formatPrice(product.price)}</span>
              <span class="rating-row"><span class="stars">★★★★★</span> ${product.rating}</span>
            </div>
            <p>${product.description}</p>

            <span class="option-label">Состав</span>
            <div class="ingredient-list">
              ${product.ingredients.map((item) => `<span class="option-pill">${item}</span>`).join('')}
            </div>

            <span class="option-label">Вкус</span>
            <div class="option-list">
              ${product.flavors
                .map(
                  (item, index) =>
                    `<button class="option-pill ${index === 0 ? 'selected' : ''}" type="button" data-flavor="${item}">${item}</button>`,
                )
                .join('')}
            </div>

            <span class="option-label">Вес</span>
            <div class="option-list">
              ${product.weights
                .map(
                  (item, index) =>
                    `<button class="option-pill ${index === 0 ? 'selected' : ''}" type="button" data-weight="${item}">${item}</button>`,
                )
                .join('')}
            </div>

            <div class="qty-row">
              <span class="option-label" style="margin: 0;">Количество</span>
              <div class="qty-control">
                <button type="button" data-qty-minus>-</button>
                <span id="modalQty">1</span>
                <button type="button" data-qty-plus>+</button>
              </div>
            </div>

            <button class="btn btn-primary" type="button" data-add-product="${product.id}" style="width:100%;">Добавить в корзину</button>
          </div>
        </div>

        <div class="similar-box">
          <h3>Похожие товары</h3>
          <div class="similar-grid">
            ${similar
              .map(
                (item) => `
                  <div class="mini-card" data-open-product="${item.id}">
                    <img src="${item.image}" alt="${item.name}" />
                    <div class="mini-body">
                      <strong>${item.name}</strong>
                      <div>${formatPrice(item.price)}</div>
                    </div>
                  </div>
                `,
              )
              .join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  const modal = $('#productModal');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');

  let qty = 1;
  const qtyNode = $('#modalQty');

  modal.querySelector('[data-close-modal]').addEventListener('click', () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  });

  modal.querySelectorAll('[data-flavor]').forEach((button) => {
    button.addEventListener('click', () => {
      modal.querySelectorAll('[data-flavor]').forEach((item) => item.classList.remove('selected'));
      button.classList.add('selected');
    });
  });

  modal.querySelectorAll('[data-weight]').forEach((button) => {
    button.addEventListener('click', () => {
      modal.querySelectorAll('[data-weight]').forEach((item) => item.classList.remove('selected'));
      button.classList.add('selected');
    });
  });

  modal.querySelector('[data-qty-minus]').addEventListener('click', () => {
    qty = Math.max(1, qty - 1);
    qtyNode.textContent = qty;
  });

  modal.querySelector('[data-qty-plus]').addEventListener('click', () => {
    qty += 1;
    qtyNode.textContent = qty;
  });

  modal.querySelector('[data-add-product]').addEventListener('click', () => {
    const selectedFlavor = modal.querySelector('[data-flavor].selected')?.dataset.flavor || product.flavors[0];
    const selectedWeight = modal.querySelector('[data-weight].selected')?.dataset.weight || product.weights[0];
    addToCart(product.id, qty, selectedFlavor, selectedWeight);
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    openCart();
  });
}

function bindEvents() {
  document.addEventListener('click', (event) => {
    const addBtn = event.target.closest('[data-add-cart]');
    if (addBtn) {
      addToCart(addBtn.dataset.addCart, 1);
      openCart();
      return;
    }

    const openBtn = event.target.closest('[data-open-product]');
    if (openBtn) {
      openProductModal(openBtn.dataset.openProduct);
      return;
    }

    const cartDecrease = event.target.closest('[data-cart-decrease]');
    if (cartDecrease) {
      changeCartQuantity(cartDecrease.dataset.cartDecrease, -1);
      return;
    }

    const cartIncrease = event.target.closest('[data-cart-increase]');
    if (cartIncrease) {
      changeCartQuantity(cartIncrease.dataset.cartIncrease, 1);
      return;
    }

    const cartRemove = event.target.closest('[data-cart-remove]');
    if (cartRemove) {
      removeCartItem(cartRemove.dataset.cartRemove);
      return;
    }

    if (event.target.matches('#cartOverlay')) {
      closeCart();
    }

    if (event.target.matches('.modal')) {
      event.target.classList.remove('is-open');
      event.target.setAttribute('aria-hidden', 'true');
    }
  });

  $('#cartToggle').addEventListener('click', openCart);
  $('#closeCart').addEventListener('click', closeCart);
  $('#cartOverlay').addEventListener('click', closeCart);

  $('#searchInput').addEventListener('input', (event) => {
    state.search = event.target.value;
    renderCatalog();
  });

  $('#sortSelect').addEventListener('change', (event) => {
    state.sort = event.target.value;
    renderCatalog();
  });

  document.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      state.category = button.dataset.category;
      document.querySelectorAll('.filter-btn').forEach((item) => item.classList.toggle('active', item === button));
      renderCatalog();
    });
  });

  $('#checkoutBtn').addEventListener('click', () => {
    if (!state.cart.length) {
      alert('Корзина пуста. Добавьте товары перед оформлением заказа.');
      return;
    }

    alert('Заказ оформлен! В ближайшее время с вами свяжется менеджер.');
    state.cart = [];
    saveCart();
    renderCart();
    closeCart();
  });
}

function init() {
  renderCategories();
  renderCatalog();
  renderPopular();
  renderCart();
  updateCartCount();
  bindEvents();
}

init();
