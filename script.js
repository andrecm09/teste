const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");

botaoNao.addEventListener("mouseover", () => {

    const largura = window.innerWidth - botaoNao.offsetWidth;
    const altura = window.innerHeight - botaoNao.offsetHeight;

    const novoX = Math.random() * largura;
    const novoY = Math.random() * altura;

    botaoNao.style.position = "absolute";
    botaoNao.style.left = novoX + "px";
    botaoNao.style.top = novoY + "px";

});


botaoSim.addEventListener("click", () => {
    window.location.href = "pagina2.html";
});
