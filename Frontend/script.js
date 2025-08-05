document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    menu.innerHTML = "<p>Loading menu...</p>";

    setTimeout(() => {
        menu.innerHTML = "<ul><li>Pizza - ₹200</li><li>Burger - ₹120</li></ul>";
    }, 1000);
});
