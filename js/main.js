function convertTemperatureFC() {

    const inputValue = document.getElementById('inputValue').value; // Отримане число від користувача

    if (isNaN(inputValue)) {
        alert('Будь ласка, введіть коректне число!'); // Отримане значеннч перевіряється, чи є воно числом
        return;
    }

    const temperature = Math.floor(parseFloat(inputValue));  // Перетворюємо рядок в число для подальшого обчислення температур

    const conversionType = document.querySelector('select').value; // Перевірка на вибрану опцію в селекторі

    let result;

    if (conversionType === 'CtoF') {
        result = (temperature * 9/5) + 32; // Формула перетворення Цельсій в Фаренгейт

        if (Number.isInteger(result)) { // Перевірка результату на ціле число
            result = Math.floor(result)  + ' °F';
        } else {
            result = result.toFixed(2) + ' °F'
        }

    } else if (conversionType === 'FtoC') {
        result = (temperature - 32) * 5/9; // Формулв перетворення Фаренгейт в Цельсій

        if (Number.isInteger(result)) { // Перевірка результату на ціле чилсо
            result = Math.floor(result) + ' °C'
        } else {
            result = result.toFixed(2) + ' °C'
        }

    } // Перевіряємо яка опція обрана, та виконується дія відповідно до опції

    document.getElementById('total-res').textContent = result; // Отримкємо результат
}