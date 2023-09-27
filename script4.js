$(document).ready(function() {
    // Зберігаємо посилання на всі чекбокси у змінній checkboxes
    var checkboxes = $('input[type="checkbox"]');

    // Встановлюємо початковий лічильник вибраних чекбоксів
    var selectedCount = 0;

    // Додаємо обробник події "change" для кожного чекбокса
    checkboxes.change(function() {
        // Перевіряємо, чи чекбокс відзначений
        if (this.checked) {
            selectedCount++;
        } else {
            selectedCount--;
        }

        // Перевіряємо, чи вже відзначено 3 чекбокси
        if (selectedCount >= 3) {
            // Вимикаємо всі чекбокси
            checkboxes.attr('disabled', true);
        } else {
            // Увімкнемо всі чекбокси
            checkboxes.attr('disabled', false);
        }
    });
});