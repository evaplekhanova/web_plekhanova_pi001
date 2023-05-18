// Получение элементов формы
const orderForm = document.getElementById('order-form');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');
const confirmButton = document.getElementById('confirm-button');
const orderDetails = document.getElementById('order-details');
const submitBtn = document.getElementById("submit-btn");


// Обработчик отправки формы
orderForm.addEventListener('submit', function(event) {
event.preventDefault(); // Предотвращаем отправку формы

// Создание объекта с данными заказа
const orderData = {
manager: document.getElementById('manager-select').value,
lastName: document.getElementById('last-name-input').value,
firstName: document.getElementById('first-name-input').value,
patronymic: document.getElementById('patronymic-input').value,
printingType: document.getElementById('printing-select').value,
paperType: document.getElementById('paper-select').value,
quantity: document.getElementById('quantity-input').value,
comments: document.getElementById('comments-input').value
};

// Генерация HTML-кода с данными заказа
let orderHtml = '';
orderHtml += `<p><strong>Менеджер:</strong> ${orderData.manager}</p>`;
orderHtml += `<p><strong>Фамилия:</strong> ${orderData.lastName}</p>`;
orderHtml += `<p><strong>Имя:</strong> ${orderData.firstName}</p>`;
orderHtml += `<p><strong>Отчество:</strong> ${orderData.patronymic}</p>`;
orderHtml += `<p><strong>Тип печати:</strong> ${orderData.printingType}</p>`;
orderHtml += `<p><strong>Тип бумаги:</strong> ${orderData.paperType}</p>`;
orderHtml += `<p><strong>Количество:</strong> ${orderData.quantity}</p>`;
orderHtml += `<p><strong>Комментарии:</strong> ${orderData.comments}</p>`;

// Отображение данных заказа в модальном окне
orderDetails.innerHTML = orderHtml;
modal.style.display = 'block';
});

// Закрытие модального окна
closeButton.addEventListener('click', function() {
modal.style.display = 'none';
});

// Обработчик подтверждения заказа
confirmButton.addEventListener('click', function() {
console.log('Заказ подтвержден:', orderDetails.innerHTML);
});

const successNotification = document.getElementById("success-notification");


confirmButton.addEventListener("click", () => {
// изменение текста и цвета кнопки
confirmButton.innerText = "Подтверждено";
confirmButton.style.backgroundColor = "#45a049";

// показ модального окна
modal.style.display = "block";

// закрытие модального окна через 3 секунды
setTimeout(() => {
modal.style.display = "none";
orderForm.reset(); //очищение всех данных

}, 1500);
});

