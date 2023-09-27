$(document).ready(function () {
    // Знаходимо всі <h2> з класом 'head' і встановлюємо для них зелений колір фону
    $("h2.head").css("background-color", "green");

    // Знаходимо всі елементи з класом 'inner' серед знайдених <h2> і встановлюємо розмір шрифту 35px
    $("h2.head .inner").css("font-size", "35px");
});