// pegando os elementos e inserindo-os numa variável
const btnLogin = document.querySelector(".btn-login"); //pegando o botão
const form = document.querySelector("form"); //pegando o form

// ações ao clicar no botão
btnLogin.addEventListener("click", event => {
    event.preventDefault(); //prevenindo o funcionamento padão do form (para que ele não faã reload quando clicar no submit)

    //seleciona todos os inputs e os coloca em um array
    const fields = [... document.querySelectorAll(".input-block input")];

    // adiciona a classe "validate-error" em cada campo que estiver vazio
    fields.forEach(field => {
        if (field.value === "") {
            form.classList.add("validate-error"); //insere a classe  no form
        };
    })

    const formError = document.querySelector(".validate-error"); // seleciona os campos vazios (com a classe ".validate-error")
    // se houver a classe "validade-error" verifica se a animação terminou e a remove
    if (formError) {
        // quando chegar no final da animação "nono", ele remove a classe.
        formError.addEventListener("animationend", event => {
            if (event.animationName === "nono") {
                formError.classList.remove("validate-error");
            }
        })
    }else { // se não tiver a classe "validate-error", add a classe "form-hide"
        form.classList.add("form-hide");
    }

    /** Adicionando e removendo a classe "validate-error" logo em seguida faz com que a animação aconteça
     * toda vez que o botão de login for clicado. */
    
     // Essa lógica vai continuar executando até que todos os campos estejam preenchidos
});

// ações do formulário
//  adiciona 
form.addEventListener("animationstart", event => {
    if (event.animationName === "down") {
        document.querySelector("body").style.overflow = "hidden";
    }
});

form.addEventListener("animationend", event => {
    if (event.animationName === "down") {
        form.style.display = "none";
        document.querySelector("body").style.overflow = "none";
    }
});


// background squares
const ulSquares = document.querySelector("ul.squares"); //seleciona a ul com a classe "squares".

// criando os squares (quadrados)
for (let i = 0; i < 15; i++) {
    const li = document.createElement("li"); //cria um elemento li

    const random = (min, max) => Math.random() * (max - min) + min; // função que gera numeros alearótios

    const size = Math.floor(random(10, 120)); // tamanhos aleatórios para os squares
    const position = random(1, 90); // posições aleatórias 
    const delay = random(5, 0.1); // atrasos aleatórios
    const duration = random(25, 10); // duração aleatória

    // criando squares de tamanhos diferentes
    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    // faz com que os os squares apareçam em lugares diferentes
    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`; // o atraso que cada square terá para aparecer na tela
    li.style.animationDuration = `${duration}s`; // duração da animação

    // tempos diferentes de velocidade que os squares se movimentarão na tela
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    // adiciona os li criados ao ul
    ulSquares.appendChild(li); 
}