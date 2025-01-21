document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');

    // Пример списка продуктов
    const products = [
        { name: 'Яблоко', price: 50 },
        { name: 'Банан', price: 30 },
        { name: 'Апельсин', price: 40 },
    ];

    // Отображаем список продуктов
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.price} руб.`;
        productList.appendChild(li);
    });
});
