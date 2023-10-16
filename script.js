const dentro = document.getElementById("dentro");
const fora = document.getElementById("fora");

const nomesDentro = [
  "Luiz",
  "Angela",
  "Flavia",
  "Livia",
  "Sarah",
  "Tio Marcelo",
  "Tia Reanta",
  "Tia Claudia",
  "Tio Gilson",
  "Tia Ana",
  "Tio Augustinho",
  "Tia Mara",
  "Tio Adriano",
];
const nomesFora = ["flavia"];

const card = (nome) => {
  const p = document.createElement("p");
  p.innerText = nome;

  p.addEventListener("click", (e) => {
    const index = nomesDentro.indexOf(nome);
    if (index !== -1) {
      nomesDentro.splice(index, 1);

      nomesFora.push(nome);

      console.log("Nomes Dentro:", nomesDentro);
      console.log("Nomes Fora:", nomesFora);
      montarDentro();
      montarFora();
    }
  });

  return p;
};

const montarDentro = () => {
  dentro.innerHTML = "";
  nomesDentro.forEach((nome) => {
    const cardNome = card(nome);
    dentro.append(cardNome);
  });
};

montarDentro();

const montarFora = () => {
  fora.innerHTML = "";
  nomesFora.forEach((nome) => {
    const cardNome = card(nome);
    fora.append(cardNome);
  });
};

montarFora();

const sortear = () => {
  const sorteado = document.getElementById("sorteado");

  // Verifique se ainda existem nomes dentro do array
  if (nomesDentro.length > 0) {
    // Gere um índice aleatório dentro dos limites do array
    const indiceSorteado = Math.floor(Math.random() * nomesDentro.length);

    // Obtenha o nome sorteado
    const nomeSorteado = nomesDentro[indiceSorteado];

    // Insira o nome sorteado no elemento "sorteado"
    sorteado.innerText = nomeSorteado;
  } else {
    sorteado.innerText = "Não há mais nomes para sortear.";
  }
};

const but = document.getElementById("but");

but.addEventListener("click", () => {
  sortear();
});
