function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px"
}
function closeNav() {
    document.getElementById("sidebar").style.width = "0"
    document.getElementById("main").style.marginLeft = "0"
}
document.getElementById('numFilhos').addEventListener('input', function () {
    const numFilhos = parseInt(this.value);
    const filhosInfoDiv = document.getElementById('filhosInfo');
    filhosInfoDiv.innerHTML = ''; // Limpa o conteúdo anterior

    if (numFilhos >= 1) {
        for (let i = 1; i <= numFilhos; i++) {
            filhosInfoDiv.innerHTML += `
                <label for="idade${i}"></label>
                <input type="text" id="nomeFilho${i}" name="idade${i}" min="0" required placeholder="Nome do Filho" >
                <input type="number" id="idade${i}" name="idade${i}" min="0" required placeholder="Idade do filho ${i}°">

                <div class="cpf${i}" style="display:none;" >
                    <label for="cpf${i}"></label>
                    <input type="text"  id="cpf${i}" name="cpf${i}" required placeholder="CPF">
                </div>
            `;
            document.getElementById(`nomeFilho${i}`).style.width = "100%";
            document.getElementById(`nomeFilho${i}`).style.height = "25px";
            document.getElementById(`nomeFilho${i}`).style.borderRadius = "5px";
            document.getElementById(`nomeFilho${i}`).style.marginBottom = "5px";
            document.getElementById(`idade${i}`).style.width = "100%";
            document.getElementById(`idade${i}`).style.height = "25px";
            document.getElementById(`idade${i}`).style.borderRadius = "5px";
            document.getElementById(`idade${i}`).style.marginBottom = "5px";
            document.getElementById(`cpf${i}`).style.width = "100%";
            document.getElementById(`cpf${i}`).style.height = "25px";
            document.getElementById(`cpf${i}`).style.borderRadius = "5px";
            document.getElementById(`cpf${i}`).style.marginBottom = "5px";
        }

        // Adiciona eventos de entrada para os campos de idade
        for (let i = 1; i <= numFilhos; i++) {
            document.getElementById(`idade${i}`).addEventListener('input', function () {
                const idade = parseInt(this.value);
                const cpfField = document.querySelector(`.cpf${i}`);

                // Mostra ou esconde o campo CPF com base na idade
                if (idade > 18) {
                    cpfField.style.display = 'block';

                } else {
                    cpfField.style.display = 'none';
                }
            });
        }
    }
});
document.getElementById('estadoCivil').addEventListener('change', function () {
    const estadoCivil = this.value;
    const casadoInfoDiv = document.getElementById('casadoInfo');

    // Verifica se a opção selecionada é 'casado'
    if (estadoCivil === 'casado') {
        casadoInfoDiv.style.display = 'block'; // Mostra os campos do cônjuge
    } else {
        casadoInfoDiv.style.display = 'none'; // Esconde os campos do cônjuge
    }
});
function loadProfilePic(event) {
    const image = document.getElementById('profileImage');
    image.src = URL.createObjectURL(event.target.files[0]);
}
function loadProfilePic(event) {
    const image = document.getElementById('profileImage');
    image.src = URL.createObjectURL(event.target.files[0]);
}