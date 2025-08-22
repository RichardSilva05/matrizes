function procDesafio1() {
 let predio=[];
 let soma=0;
 let contPredio=0;
 let mediaPredio=0;

 for(i=1; i<6; i++){
    predio[i]=[];
    for(j=1; j<4; j++){
        predio[i][j]=parseFloat(prompt("Informe a renda mensal  da "+j+"° Familia : R$"));
        console.log("Renda salarial da "+i+"° Familia : R$"+predio[i][j]);
        contPredio = contPredio + 1;
        soma += predio[i][j];
        mediaPredio = soma / contPredio;
    }
 }   
    console.log("Soma total da renda salarial do prédio : R$"+soma);
    console.log("Média da renda salarial do prédio : R$"+mediaPredio);
 return false;
}
