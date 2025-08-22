function procDesafio2() {
 let soma=0;
 let estoque=[];

 for(i=1; i<4; i++){
   estoque[i]=[];
   console.log(i+"° Linha");
   for(j=1; j<3; j++){
      estoque[i][j]=parseFloat(prompt("Informe o "+j+"° número inteiro :"));
      console.log(j+"° número armazenado : "+estoque[i][j]);
      soma +=estoque[i][j];
   }
 }
 console.log("");
 console.log("Soma dos elementos da matriz :"+soma);
 return false;
}
