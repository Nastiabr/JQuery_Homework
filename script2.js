document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("a"); // Вибираємо всі посилання на сторінці
    links.forEach(function (link) {
        var href = link.getAttribute("href"); // Отримуємо значення атрибуту href
        if (href && href.startsWith("https://")) {
            link.setAttribute("target", "_blank"); // Додаємо атрибут target="_blank"
        }
    });
});