var formulario = $("#form-adiciona");

$('#adiciona-produto').click(function (event) {
    event.preventDefault();

    var nome = $("#input-nome").val();
    var preco = $("#input-preco").val();
    var desc = $("#input-desc").val();
    var tabelaProd = $("#tabela-produto");

    if (nome == "" || preco == "" || desc == "") {
        demo.initChartist();

        $.notify({
            icon: 'pe-7s-attention',
            message: "Você precisa preencher todos os campos!!"

        }, {
            type: 'danger',
            timer: 3000
        });

        return;
    }

    var produtoTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    nomeTd.textContent = nome;
    nomeTd.classList.add("produto-nome");
    var precoTd = document.createElement("td");
    precoTd.textContent = "R$ " + preco;
    var descTd = document.createElement("td");
    descTd.textContent = desc;
    produtoTr.append(nomeTd);
    produtoTr.append(descTd);
    produtoTr.append(precoTd);
    tabelaProd.append(produtoTr);

    $('#form-adiciona').get(0).reset();
});

$("#input-busca-nome").on("input", function () {

    var produtos = $(".produto");
    for (var i = 0; i < produtos.length; i++) {
        var produto = produtos[i];
        var tdNome = produto.querySelector(".produto-nome");
        var nome = tdNome.textContent;
        var expressao = new RegExp(this.value, "i");
        if (!expressao.test(nome)) {
            produto.classList.add("invisivel");
        } else {
            produto.classList.remove("invisivel");
        }
    }
});

