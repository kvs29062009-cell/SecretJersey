let selectedSize = null;

document.querySelectorAll('.size').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size')
      .forEach(b => b.classList.remove('active'));

    btn.classList.add('active');
    selectedSize = btn.textContent;
  });
});

const buyBtn = document.querySelector('.buy');

if (buyBtn) {
  buyBtn.addEventListener('click', () => {
    if (!selectedSize) {
      alert('Пожалуйста, выберите размер');
      return;
    }

    const name = buyBtn.dataset.name;
    const price = buyBtn.dataset.price;

    alert(
      `Товар: ${name}\nРазмер: ${selectedSize}\nЦена: ${price} ₽`
    );

    // здесь будет переход к оплате
  });
}

