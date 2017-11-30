function validarLogin() {
    var usuario = $("#usuario").val();
    var senha = $("#senha").val();

    if (usuario == "admin" && senha == "admin") {
        window.location = "principal.html";
    } else {
        demo.initChartist();

        $.notify({
            icon: 'pe-7s-attention',
            message: "Digite um usuário e senha válido!"

        }, {
            type: 'danger',
            timer: 1000
        });

        return;
    }
}
