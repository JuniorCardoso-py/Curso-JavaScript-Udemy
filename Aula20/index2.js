const pessoa1 = {
    nome:'Junior',
    sobrenome:'Cardoso',
    idade:19,

    fala () {
        console.log('Olá Mundo !');
        console.log(`${this.nome} ${this.sobrenome} Esta dizendo Oi, a minha idade atual é ${this.idade}`);
    },
    incrementaIdade (){
        this.idade++;
    },
};

pessoa1.fala();
pessoa1.incrementaIdade()
pessoa1.fala()

/// this é como se fosse um self no python