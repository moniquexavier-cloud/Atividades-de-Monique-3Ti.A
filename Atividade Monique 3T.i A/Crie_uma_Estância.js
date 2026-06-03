class Personagem{
    constructor(nome,classe){
        this.nome = nome;// O "This" dentro de uma classe, reflete a infromação exata dado no segundo em que é criado
        this.classe = classe;
        this.vida = 150;
    }
    receberDano(quantidade) {
        this.vida -= quantidade;
    }
}

const jogador1 = new Personagem('Aragorn','Guerreiro');
console.log(Personagem.nome);
console.log(Personagem.classe);
console.log(Personagem.vida);
jogador1.receberDano(30);
console.log(Personagem.vida);