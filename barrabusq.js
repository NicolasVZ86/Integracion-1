document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("buscarBtn");
    const products = document.querySelectorAll(".product-item");

    searchButton.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe

        const searchBar = document.getElementById("barraBusqueda");
        const searchTerm = searchBar.value.toLowerCase().trim(); // Elimina espacios al principio y al final

        products.forEach(function (product) {
            const productName = product.querySelector(".card-title").textContent.toLowerCase();
            const productDescription = product.querySelector(".card-text").textContent.toLowerCase();
            const productCategory = product.getAttribute("category").toLowerCase();

            if (productName.includes(searchTerm) || productDescription.includes(searchTerm) || productCategory.includes(searchTerm) || searchTerm === "") {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});
