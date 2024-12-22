class Heroi{ 
    constructor(nome, idade, tipo, ataque){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    this.ataque = ataque
}

    escrever() {
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`);
    }
}

let caracteristicas = new Heroi("Thor", "40", "Guerreiro", "Espada")

caracteristicas.escrever();
