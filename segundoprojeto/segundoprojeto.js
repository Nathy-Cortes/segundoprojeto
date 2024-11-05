
    let resultado = soma(30, 70)
    console.log("Resultado dessa partida é " + resultado)
    function soma(numA, numB){
        let vitorias = numA + numB;
        return vitorias
    } ;
    let vitorias = (resultado)
    let Rank

    if (vitorias < 10) {
        Rank = "Ferro";} 
    else if (vitorias >= 11 && vitorias <= 20){
        Rank = "Bronze";}
    else if (vitorias >=21 && vitorias <=50){
        Rank = "Prata";}
    else if (vitorias >=51 && vitorias <=80){
        Rank = "Ouro";}
    else if (vitorias >=81 && vitorias <=90){
        Rank = "Diamante";}
    else if (vitorias >=91 && vitorias <=100){
        Rank = "Lendário";}
    else if (vitorias >= 101){
    Rank = "Imortal"; }
    
console.log ("O heroí tem saldo de " + resultado + " e está no Rank de " + Rank)



