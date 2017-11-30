var produtos = document.querySelectorAll(".produto");
var tabProduto = document.querySelector("#tabela-produto");

tabProduto.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
