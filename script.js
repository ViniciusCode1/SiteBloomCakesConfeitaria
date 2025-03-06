const form = document.getElementById("form");
const username = document.getElementById("nome_cliente")
const email = document.getElementById("email")
const doces = document.getElementById("doces")
const sabores = document.getElementById("sabores")
const quantidade = document.getElementById("quantidade")
const CEP_cliente = document.getElementById("CEP_cliente")
const pagamento = document.getElementById("pagamento")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("SUCESSO")

    var form = document.getElementById("form").value;
      var url = "https://api.whatsapp.com/send/?phone=5511978796633?text=" // Seu numero
        + "Formulário de Contato" + "%0a" // Mensagem personalizada
        + "%0a" // Quebra de linha
        + "Nome: " + nome + "%0a" // Dados do formulário
        + "Telefone: " + telefone + "%0a"
        + "E-mail: " + email + "%0a"
        + "Mensagem: " + msg;
      window.open(url, '_blank').focus();
    }

)


