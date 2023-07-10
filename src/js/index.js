const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        rolagemMobile();

        removerSelecaoDoPersonagem();

        selecionarNovoPersonagem(personagem);

        alterarImagemDoPersonagem(personagem);

        alterarNomeDoPersonagem(personagem);

        alterarDescricaoDoPersonagem(personagem);
    })
})

function rolagemMobile() {
    if (window.innerWidth < 450) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function alterarDescricaoDoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomeDoPersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemDoPersonagem(personagem) {
    const personagemGrande = document.querySelector('.personagem-grande');
    personagemGrande.src = `./src/images/card-${personagem.id}.png`;
}

function selecionarNovoPersonagem(personagem) {
    personagem.classList.add('selecionado');
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
