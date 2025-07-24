  const cart = {}; // Store items and quantities
  const itemElements = document.querySelectorAll('#itemList li');
  const selectedDisplay = document.getElementById('selectedItems');
  const totalDisplay = document.getElementById('totalPrice');

  function updateDisplay() {
    selectedDisplay.innerHTML = ''; // Clear current list
    let total = 0;

    for (let item in cart) {
      const quantity = cart[item].quantity;
      const price = cart[item].price;
      total += quantity * price;

      const li = document.createElement('li');
      li.textContent = `${item} x ${quantity} - ₦${price * quantity}`;
      selectedDisplay.appendChild(li);
    }

    totalDisplay.textContent = total;
  }

  itemElements.forEach(item => {
    item.addEventListener('click', () => {
      const name = item.getAttribute('data-name');
      const price = parseInt(item.getAttribute('data-price'));

      if (!cart[name]) {
        cart[name] = { quantity: 1, price };
      } else {
        cart[name].quantity += 1;
      }

      updateDisplay();
    });
  });
