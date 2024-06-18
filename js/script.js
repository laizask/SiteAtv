function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var esnuper = document.getElementById("esnuper").checked;

    if (name === "" || email === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    if (!esnuper) {
        alert("Por favor, confirme se deseja ser um Esnuper.");
        return false;
    }

    return true;
}

window.onload = function () {
    var urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('name') && urlParams.has('email') && urlParams.has('esnuper')) {
        document.getElementById("userName").textContent = urlParams.get('name');
        document.getElementById("userEmail").textContent = urlParams.get('email');
        var esnuper = urlParams.get('esnuper') === "true" ? "Sim" : "Não";
        document.getElementById("userEsnuper").textContent = esnuper;
    }
};
